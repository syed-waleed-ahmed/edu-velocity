import trackingSheet from "../../tracking/trackingSheet.json";
import type { TrackingItem } from "../../tracking/types";

const rows = trackingSheet as TrackingItem[];

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
              <th>Input -&gt; UI</th>
              <th>Source</th>
              <th>Evaluation Details</th>
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
                    <span className="source-line">{row.input.description}</span>
                    <span className="source-line">UI: {row.ui_component}</span>
                  </div>
                </td>
                <td>
                  <div className="source-stack">
                    <span className="source-line">{row.source.type}</span>
                    <span className="source-line">{row.source.name}</span>
                    <a className="source-link" href={row.source.link} target="_blank" rel="noreferrer">
                      {row.source.link}
                    </a>
                  </div>
                </td>
                <td>
                  <details className="tracking-expand">
                    <summary>View</summary>
                    <div className="tracking-expand-body">
                      <p className="source-line">Build: {row.velocity_factors.build_time_estimate}</p>
                      <p className="source-line">Complexity: {row.velocity_factors.integration_complexity}</p>
                      <p className="source-line">Reusability: {row.velocity_factors.reusability_score}</p>
                      <p className="source-line">Risks: {row.risks.join(", ")}</p>
                      <p className="source-line">Dependencies: {row.dependencies.join(", ")}</p>
                    </div>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
