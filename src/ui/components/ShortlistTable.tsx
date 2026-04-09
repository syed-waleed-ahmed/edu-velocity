import shortlistData from "../../tracking/capabilities_shortlist.json";
import type { ShortlistCapability } from "../../tracking/types";

const rows = shortlistData as ShortlistCapability[];

export function ShortlistTable() {
  return (
    <section>
      <h3 className="section-title">Top 10 Shortlist</h3>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Capability</th>
              <th>Type</th>
              <th>Score</th>
              <th>Rationale</th>
              <th>Requires UI</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.capability_name}>
                <td>{row.capability_name}</td>
                <td>{row.type}</td>
                <td>{row.score}</td>
                <td>{row.rationale}</td>
                <td>{row.requires_ui ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
