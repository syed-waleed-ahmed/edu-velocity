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
              <th>Input</th>
              <th>Output UI</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.capability}>
                <td>{row.capability}</td>
                <td>{row.type}</td>
                <td>{row.persona}</td>
                <td>{row.category}</td>
                <td>{row.effort}</td>
                <td>
                  <div className="source-stack">
                    <span className="source-line">{row.input.description}</span>
                    <span className="source-line">Fields: {row.input.fields.join(", ")}</span>
                  </div>
                </td>
                <td>
                  <div className="source-stack">
                    <span className="source-line">{row.output_ui.component}</span>
                    <span className="source-line">{row.output_ui.description}</span>
                  </div>
                </td>
                <td>
                  {row.sources.map((source) => (
                    <div className="source-stack" key={`${source.name}-${source.link}`}>
                      <span className="source-line">{source.type}</span>
                      <span className="source-line">{source.name}</span>
                      <a className="source-link" href={source.link} target="_blank" rel="noreferrer">
                        {source.link}
                      </a>
                      <span className="source-line">{source.notes}</span>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
