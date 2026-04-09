import trackingSheet from "../../tracking/trackingSheet.json";
import type { TrackingItem } from "../../tracking/types";

const rows = trackingSheet as TrackingItem[];

function isUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

function splitSourceLines(source: string): string[] {
  return source
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export function TrackingTable() {
  return (
    <section>
      <h3 className="section-title">Tracking Sheet</h3>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Capability</th>
              <th>Type</th>
              <th>Persona</th>
              <th>Category</th>
              <th>Effort</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.capability_name}>
                <td>{row.capability_name}</td>
                <td>{row.type}</td>
                <td>{row.persona}</td>
                <td>{row.category}</td>
                <td>{row.effort}</td>
                <td>
                  <div className="source-stack">
                    {splitSourceLines(row.source).map((sourceLine) =>
                      isUrl(sourceLine) ? (
                        <a key={sourceLine} className="source-link" href={sourceLine} target="_blank" rel="noreferrer">
                          {sourceLine}
                        </a>
                      ) : (
                        <span key={sourceLine} className="source-line">{sourceLine}</span>
                      )
                    )}
                    {!splitSourceLines(row.source).some(isUrl) ? (
                      <a className="source-link" href={row.source_link} target="_blank" rel="noreferrer">
                        {row.source_link}
                      </a>
                    ) : null}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
