import useCases from "../tracking/useCases.json";
import { TrackingTable } from "./components/TrackingTable";
import { CapabilityTable } from "./components/CapabilityTable";
import { ShortlistTable } from "./components/ShortlistTable";
import { HelloWorldPanel } from "./components/HelloWorldPanel";
import { PrototypeRunner } from "./components/PrototypeRunner";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <main className="app-shell" id="main-content">
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
            <table className="data-table usecase-table" aria-label="Use cases by persona and trigger">
              <caption className="sr-only">Use cases with target persona, workflow trigger, and success criteria</caption>
              <thead>
                <tr>
                  <th scope="col">Use Case</th>
                  <th scope="col">Target</th>
                  <th scope="col">Trigger</th>
                  <th scope="col">Success Criteria</th>
                </tr>
              </thead>
              <tbody>
                {useCases.map((item) => (
                  <tr key={item.use_case}>
                    <th scope="row">{item.use_case}</th>
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
          <PrototypeRunner />
        </section>
      </div>
      </main>
    </>
  );
}
