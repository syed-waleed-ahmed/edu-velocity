import { useMemo, useState } from "react";
import { runMcpStudyPackageAgent } from "../../agents/mcpStudyPackageAgent";
import { runPlaybookLearningAgent } from "../../agents/playbookLearningAgent";
import type { LearningPackage } from "../../schemas/learningPackage.schema";
import { QuizRenderer } from "./QuizRenderer";
import { FlashcardRenderer } from "./FlashcardRenderer";
import { StudyPlanRenderer } from "./StudyPlanRenderer";
import { JsonInspector } from "./JsonInspector";

const playbookSeed =
  "Explicit objectives improve focus. Guided practice improves confidence. Retrieval checks verify understanding and reveal gaps quickly.";

export function PrototypeRunner() {
  const [mode, setMode] = useState<"mcp" | "playbook">("mcp");
  const [input, setInput] = useState("drive-math-101");
  const [output, setOutput] = useState<LearningPackage | null>(null);

  const placeholder = useMemo(() => (mode === "mcp" ? "drive-math-101" : "Paste lesson text"), [mode]);

  function runPrototype() {
    if (mode === "mcp") {
      setOutput(runMcpStudyPackageAgent(input || "drive-math-101", "drive"));
      return;
    }

    setOutput(runPlaybookLearningAgent(input || playbookSeed));
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
          <JsonInspector title="Package Summary" data={{ source: output.source, summary: output.summary, metadata: output.metadata }} />
          <FlashcardRenderer flashcards={output.flashcards} />
          <QuizRenderer quiz={output.quiz} />
          <StudyPlanRenderer plan={output.study_plan} />
          <JsonInspector title="Full JSON Output" data={output} />
        </div>
      ) : null}
    </section>
  );
}
