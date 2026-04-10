import { useMemo, useState } from "react";
import capabilitiesRaw from "../../tracking/capabilities_raw.json";
import trackingSheet from "../../tracking/trackingSheet.json";
import type { RawCapability } from "../../tracking/types";

const rows = capabilitiesRaw as RawCapability[];
const trackingRows = trackingSheet as Array<{
  capability: string;
  output_ui: { component: string; description: string };
}>;

function inferUiComponentFromOutput(output: Record<string, unknown>): string {
  if ("flashcards" in output) return "flashcards";
  if ("quiz" in output) return "quiz";
  if ("study_plan" in output || "revision_checklist" in output) return "study_plan";
  if ("anomalies" in output || "utilization" in output || "alignment_report" in output) return "table";
  return "text";
}

export function CapabilityTable() {
  const [typeFilter, setTypeFilter] = useState<"All" | "Skill" | "MCP" | "Hybrid">("All");

  const filtered = useMemo(() => {
    if (typeFilter === "All") return rows;
    return rows.filter((row) => row.type === typeFilter);
  }, [typeFilter]);

  const enriched = useMemo(
    () =>
      filtered.map((row) => {
        const score = row.impact + row.frequency + row.feasibility;
        const mappedTracking = trackingRows.find((item) => item.capability === row.capability_name);
        const outputUi = mappedTracking?.output_ui.component ?? inferUiComponentFromOutput(row.output);

        return {
          ...row,
          score,
          outputUi,
          outputJsonKeys: Object.keys(row.output).join(", "),
          coveredUseCases: row.use_cases
        };
      }),
    [filtered]
  );

  return (
    <section>
      <h3 className="section-title">Skills and MCP Registry</h3>
      <div className="form-row">
        <label htmlFor="capability-filter">Filter by type:</label>
        <select
          id="capability-filter"
          className="select"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value as "All" | "Skill" | "MCP" | "Hybrid")}
        >
          <option>All</option>
          <option>Skill</option>
          <option>MCP</option>
          <option>Hybrid</option>
        </select>
      </div>
      <p className="metric-line">Showing {enriched.length} of {rows.length}</p>
      <div className="table-wrap">
        <table className="data-table registry-table">
          <thead>
            <tr>
              <th>Skill/MCP</th>
              <th>6C</th>
              <th>Type</th>
              <th>Persona</th>
              <th>Use Cases Covered</th>
              <th>Input -&gt; JSON -&gt; UI</th>
              <th>Effort</th>
              <th>Risks</th>
              <th>Dependencies</th>
              <th>Score (I/F/F)</th>
              <th>Setup/Auth/Limits</th>
            </tr>
          </thead>
          <tbody>
            {enriched.map((row) => (
              <tr key={row.capability_name}>
                <td>{row.capability_name}</td>
                <td>{row.category}</td>
                <td>{row.type}</td>
                <td>{row.persona}</td>
                <td>{row.coveredUseCases.join(" | ")}</td>
                <td>
                  {row.input} -&gt; {row.outputJsonKeys} -&gt; {row.outputUi}
                </td>
                <td>{row.effort}</td>
                <td>{row.risks.join(", ")}</td>
                <td>{row.dependencies.join(", ")}</td>
                <td>{row.score} ({row.impact}/{row.frequency}/{row.feasibility})</td>
                <td>
                  {row.setup_complexity ?? "N/A"} / {row.auth_model ?? "none"} / {row.limits ?? "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
