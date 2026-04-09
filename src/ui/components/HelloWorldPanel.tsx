import resultsData from "../../tracking/hello_world_results.json";
import issuesData from "../../tracking/issues_log.json";
import type { HelloWorldResult, IssueRecord } from "../../tracking/types";

const results = resultsData as HelloWorldResult[];
const issues = issuesData as IssueRecord[];

export function HelloWorldPanel() {
  return (
    <section>
      <h3 className="section-title">Hello-World Test Results</h3>
      <p className="output-label">Phase 3 Preview — Initial Validation</p>
      <p className="metric-line">Total runs: {results.length} | Captured issues: {issues.length}</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Capability</th>
              <th>Status</th>
              <th>Response Time (ms)</th>
              <th>Issues</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row) => (
              <tr key={row.capability_name}>
                <td>{row.capability_name}</td>
                <td>{row.status}</td>
                <td>{row.response_time_ms}</td>
                <td>{row.issues_found.join(", ") || "none"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
