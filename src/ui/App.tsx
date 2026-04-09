import useCases from "../tracking/useCases.json";
import capabilityMapping from "../tracking/capability_mapping.json";
import velocityMetrics from "../tracking/metrics.json";
import { TrackingTable } from "./components/TrackingTable";
import { CapabilityTable } from "./components/CapabilityTable";
import { ShortlistTable } from "./components/ShortlistTable";
import { HelloWorldPanel } from "./components/HelloWorldPanel";
import { PrototypeRunner } from "./components/PrototypeRunner";
import { JsonInspector } from "./components/JsonInspector";

export default function App() {
  return (
    <main className="app-shell">
      <div className="app-container">
        <section className="panel hero-panel">
          <h1 className="section-title">EDU Suite Capability Velocity Explorer</h1>
          <p className="hero-subtitle">
            Objective: validate how quickly capabilities move from discovery to test to reusable integration.
          </p>
          <p className="hero-architecture">
            Architecture: capability -&gt; Mastra-style module -&gt; structured JSON output -&gt; focused UI renderer.
          </p>
        </section>

        <section className="panel">
          <h3 className="section-title">Use Cases</h3>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Use Case</th>
                  <th>Target</th>
                  <th>Trigger</th>
                  <th>Success Criteria</th>
                </tr>
              </thead>
              <tbody>
                {useCases.map((item) => (
                  <tr key={item.use_case}>
                    <td>{item.use_case}</td>
                    <td>{item.target}</td>
                    <td>{item.trigger}</td>
                    <td>{item.success_criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel">
          <TrackingTable />
        </section>

        <section className="panel">
          <CapabilityTable />
        </section>

        <section className="panel">
          <ShortlistTable />
        </section>

        <section className="panel">
          <HelloWorldPanel />
        </section>

        <section className="panel">
          <JsonInspector title="Capability Mapping" data={capabilityMapping} />
        </section>

        <section className="panel">
          <JsonInspector title="Capability Velocity Metrics" data={velocityMetrics} />
        </section>

        <section className="panel">
          <PrototypeRunner />
        </section>
      </div>
    </main>
  );
}
