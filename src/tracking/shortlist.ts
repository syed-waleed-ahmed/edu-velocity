import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { calculateScore } from "./scoring";
import type { RawCapability, ShortlistCapability } from "./types";

const rawPath = resolve(process.cwd(), "src", "tracking", "capabilities_raw.json");
const shortlistPath = resolve(process.cwd(), "src", "tracking", "capabilities_shortlist.json");

function toRationale(item: RawCapability, score: number): string {
  if (score >= 14) {
    return "High-value capability with strong adoption potential and feasible implementation path.";
  }
  if (item.type === "MCP") {
    return "External integration unlocks meaningful outcomes and validates connector readiness.";
  }
  return "Balanced capability for near-term experimentation and reusable module design.";
}

export function buildShortlist(rawCapabilities: RawCapability[]): ShortlistCapability[] {
  return rawCapabilities
    .map((item) => {
      const score = calculateScore(item);
      return {
        capability_name: item.capability_name,
        type: item.type,
        category: item.category,
        persona: item.persona,
        impact: item.impact,
        frequency: item.frequency,
        feasibility: item.feasibility,
        score,
        rationale: toRationale(item, score),
        requires_ui: item.category === "Engagement" || item.category === "Creation" || item.category === "Connection"
      };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (b.feasibility !== a.feasibility) return b.feasibility - a.feasibility;
      return a.capability_name.localeCompare(b.capability_name);
    })
    .slice(0, 10);
}

function main(): void {
  const raw = JSON.parse(readFileSync(rawPath, "utf-8")) as RawCapability[];
  const shortlist = buildShortlist(raw);
  writeFileSync(shortlistPath, JSON.stringify(shortlist, null, 2) + "\n", "utf-8");
  console.log(`Generated shortlist with ${shortlist.length} capabilities.`);
}

if (process.env.VITEST !== "true") {
  main();
}
