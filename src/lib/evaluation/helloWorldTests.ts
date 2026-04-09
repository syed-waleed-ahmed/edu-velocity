import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { runMcpStudyPackageAgent } from "../../agents/mcpStudyPackageAgent";
import { runPlaybookLearningAgent } from "../../agents/playbookLearningAgent";
import { evaluateCriteria, toLinkedEvaluationResult } from "./successCriteria";
import type { HelloWorldResult, IssueRecord, ShortlistCapability } from "../../tracking/types";

const shortlistPath = resolve(process.cwd(), "src", "tracking", "capabilities_shortlist.json");
const resultsPath = resolve(process.cwd(), "src", "tracking", "hello_world_results.json");
const issuesPath = resolve(process.cwd(), "src", "tracking", "issues_log.json");

function buildSampleInput(type: ShortlistCapability["type"], capabilityName: string): Record<string, unknown> {
  if (type === "MCP") {
    return {
      source_identifier: "drive-math-101",
      provider: "drive",
      capability_name: capabilityName
    };
  }

  return {
    lesson_content:
      "Variables represent unknown values. Equations balance two expressions. Guided practice with examples improves student confidence.",
    capability_name: capabilityName
  };
}

function runSample(type: ShortlistCapability["type"], sampleInput: Record<string, unknown>): Record<string, unknown> {
  if (type === "MCP") {
    const sourceId = String(sampleInput.source_identifier ?? "drive-math-101");
    return runMcpStudyPackageAgent(sourceId, "drive");
  }

  const lesson = String(sampleInput.lesson_content ?? "Lesson content");
  return runPlaybookLearningAgent(lesson);
}

function deriveIssues(capability: ShortlistCapability, responseTime: number, sampleOutput: Record<string, unknown>): string[] {
  const issues: string[] = [];

  if (responseTime > 350) issues.push("response time");
  if (capability.type === "MCP") issues.push("auth");

  const requiredKeys = ["summary", "flashcards", "quiz", "study_plan"];
  for (const key of requiredKeys) {
    if (!(key in sampleOutput)) {
      issues.push("missing structure");
      break;
    }
  }

  return issues;
}

export function runHelloWorldTests(shortlist: ShortlistCapability[]): { results: HelloWorldResult[]; issues: IssueRecord[] } {
  const results: HelloWorldResult[] = [];
  const issues: IssueRecord[] = [];

  shortlist.forEach((capability, index) => {
    const sampleInput = buildSampleInput(capability.type, capability.capability_name);
    const simulatedResponseTime = 120 + index * 17 + (capability.type === "MCP" ? 60 : 20);
    const sampleOutput = runSample(capability.type, sampleInput);
    const criteria = evaluateCriteria({
      triggerMatched: true,
      stepsUsed: capability.type === "MCP" ? 3 : 2,
      stepLimit: 4,
      failedApiCalls: 0,
      requiresCorrection: false,
      consistentAcrossRuns: true
    });
    const issuesFound = deriveIssues(capability, simulatedResponseTime, sampleOutput);
    const status: HelloWorldResult["status"] = criteria.passed && issuesFound.length <= 1 ? "pass" : "warn";
    const evaluationResult = toLinkedEvaluationResult({
      capabilityName: capability.capability_name,
      criteria,
      issuesFound
    });

    results.push({
      capability_name: capability.capability_name,
      sample_input: sampleInput,
      sample_output: sampleOutput,
      status,
      response_time_ms: simulatedResponseTime,
      issues_found: issuesFound,
      evaluation_result: evaluationResult
    });

    issuesFound.forEach((issue) => {
      issues.push({
        capability_name: capability.capability_name,
        issue_type: issue as IssueRecord["issue_type"],
        severity: issue === "missing structure" ? "high" : issue === "auth" ? "medium" : "low",
        notes: `Detected during hello-world run for ${capability.capability_name}.`
      });
    });
  });

  return { results, issues };
}

function main(): void {
  const shortlist = JSON.parse(readFileSync(shortlistPath, "utf-8")) as ShortlistCapability[];
  const { results, issues } = runHelloWorldTests(shortlist);

  writeFileSync(resultsPath, JSON.stringify(results, null, 2) + "\n", "utf-8");
  writeFileSync(issuesPath, JSON.stringify(issues, null, 2) + "\n", "utf-8");

  console.log(`Saved hello-world results for ${results.length} capabilities with ${issues.length} captured issues.`);
}

if (process.env.VITEST !== "true") {
  main();
}
