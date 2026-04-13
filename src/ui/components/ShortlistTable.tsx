import shortlistData from "../../tracking/capabilities_shortlist.json";
import type { ShortlistCapability } from "../../tracking/types";

const rows = shortlistData as ShortlistCapability[];

export function ShortlistTable() {
  return (
    <section>
      <h3 className="section-title">Top 10 Shortlist</h3>
      <div className="table-wrap">
        <table className="data-table" aria-label="Top ten shortlisted capabilities by score">
          <caption className="sr-only">Shortlist with score, rationale, and UI requirement flags</caption>
          <thead>
            <tr>
              <th scope="col">Capability</th>
              <th scope="col">Type</th>
              <th scope="col">Score</th>
              <th scope="col">Rationale</th>
              <th scope="col">Requires UI</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.capability_name}>
                <th scope="row">{row.capability_name}</th>
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
