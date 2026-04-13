import trackingSheet from "../../tracking/trackingSheet.json";
import type { TrackingItem } from "../../tracking/types";

const rows = trackingSheet as TrackingItem[];

export function TrackingTable() {
  return (
    <section>
      <h3 className="section-title">Tracking Sheet</h3>
      <div className="table-wrap">
        <table className="data-table" aria-label="Tracking sheet for selected EDU capabilities">
          <caption className="sr-only">Tracking details including inputs, output UI, and evidence sources</caption>
          <thead>
            <tr>
              <th scope="col">Capability</th>
              <th scope="col">Type</th>
              <th scope="col">Persona</th>
              <th scope="col">Category</th>
              <th scope="col">Effort</th>
              <th scope="col">Input</th>
              <th scope="col">Output UI</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.capability}>
                <th scope="row">{row.capability}</th>
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
