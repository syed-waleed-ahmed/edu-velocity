import { useMemo, useState } from "react";
import { runMcpStudyPackageAgent } from "../../agents/mcpStudyPackageAgent";
import { runPlaybookLearningAgent } from "../../agents/playbookLearningAgent";
import type { LearningPackage } from "../../schemas/learningPackage.schema";
import type { RunHistoryEntry } from "../../tracking/types";
import { QuizRenderer } from "./QuizRenderer";
import { FlashcardRenderer } from "./FlashcardRenderer";
import { StudyPlanRenderer } from "./StudyPlanRenderer";
import { SuccessCriteriaEvaluationPanel } from "./SuccessCriteriaEvaluationPanel";

const playbookSeed =
  "Explicit objectives improve focus. Guided practice improves confidence. Retrieval checks verify understanding and reveal gaps quickly.";

export function PrototypeRunner() {
  const [mode, setMode] = useState<"mcp" | "playbook">("mcp");
  const [input, setInput] = useState("drive-math-101");
  const [output, setOutput] = useState<LearningPackage | null>(null);
  const [runHistory, setRunHistory] = useState<RunHistoryEntry[]>([]);
  const [evaluation, setEvaluation] = useState({
    triggerSuccessRate: "",
    toolCalls: "",
    apiErrors: "",
    consistencyAcrossRuns: "",
    notes: ""
  });

  const placeholder = useMemo(() => (mode === "mcp" ? "drive-math-101" : "Paste lesson text"), [mode]);

  function appendRunHistory(entry: RunHistoryEntry) {
    setRunHistory((prev) => {
      const next = [entry, ...prev].slice(0, 20);
      localStorage.setItem("edu-prototype-run-history", JSON.stringify(next));
      return next;
    });
  }

  function runPrototype() {
    const startedAt = performance.now();

    setEvaluation({
      triggerSuccessRate: "",
      toolCalls: "",
      apiErrors: "",
      consistencyAcrossRuns: "",
      notes: ""
    });

    if (mode === "mcp") {
      const packageOutput = runMcpStudyPackageAgent(input || "drive-math-101", "drive");
      setOutput(packageOutput);
      appendRunHistory({
        capability_name: "MCP Study Package Prototype",
        mode_used: "MCP Study Package",
        output_generated: packageOutput,
        response_time_ms: Math.round(performance.now() - startedAt),
        status: packageOutput.summary ? "success" : "failure",
        executed_at: new Date().toISOString()
      });
      return;
    }

    const packageOutput = runPlaybookLearningAgent(input || playbookSeed);
    setOutput(packageOutput);
    appendRunHistory({
      capability_name: "Skill Learning Prototype",
      mode_used: "Skill Learning",
      output_generated: packageOutput,
      response_time_ms: Math.round(performance.now() - startedAt),
      status: packageOutput.summary ? "success" : "failure",
      executed_at: new Date().toISOString()
    });
  }

  return (
    <section>
      <h3 className="section-title">Prototype Playground</h3>
      <div className="form-row">
        <label htmlFor="prototype-mode">Mode:</label>
        <select
          id="prototype-mode"
          className="select"
          value={mode}
          onChange={(e) => {
            const next = e.target.value as "mcp" | "playbook";
            setMode(next);
            setInput(next === "mcp" ? "drive-math-101" : playbookSeed);
          }}
        >
          <option value="mcp">MCP Study Package prototype</option>
          <option value="playbook">Skill/Playbook Learning prototype</option>
        </select>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="input prototype-input"
        />
        <button type="button" className="button" onClick={runPrototype}>Run Prototype</button>
      </div>

      {output ? (
        <div className="prototype-output-grid">
          <p className="output-label">Structured Output (JSON Schema)</p>
          <section className="inspector">
            <h4 className="section-title">Summary</h4>
            <p className="summary-block">{output.summary}</p>
          </section>
          <FlashcardRenderer flashcards={output.flashcards} />
          <QuizRenderer quiz={output.quiz} />
          <StudyPlanRenderer plan={output.study_plan} />
          <SuccessCriteriaEvaluationPanel values={evaluation} onChange={setEvaluation} />
        </div>
      ) : null}
    </section>
  );
}
