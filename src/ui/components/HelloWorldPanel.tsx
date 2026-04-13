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
        <table className="data-table" aria-label="Hello world validation results">
          <caption className="sr-only">Validation status, response times, and issue summary for shortlisted capabilities</caption>
          <thead>
            <tr>
              <th scope="col">Capability</th>
              <th scope="col">Status</th>
              <th scope="col">Response Time (ms)</th>
              <th scope="col">Issues</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row) => (
              <tr key={row.capability_name}>
                <th scope="row">{row.capability_name}</th>
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
