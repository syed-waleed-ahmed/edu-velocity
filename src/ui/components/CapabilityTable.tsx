import { useMemo, useState } from "react";
import capabilitiesRaw from "../../tracking/capabilities_raw.json";
import type { RawCapability } from "../../tracking/types";

const rows = capabilitiesRaw as RawCapability[];

export function CapabilityTable() {
  const [typeFilter, setTypeFilter] = useState<"All" | "Skill" | "MCP" | "Hybrid">("All");

  const filtered = useMemo(() => {
    if (typeFilter === "All") return rows;
    return rows.filter((row) => row.type === typeFilter);
  }, [typeFilter]);

  return (
    <section>
      <h3 className="section-title">Raw Capability Pool</h3>
      <div className="form-row">
        <label htmlFor="capability-filter">Filter by type:</label>
        <select
          id="capability-filter"
          className="select"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value as "All" | "Skill" | "MCP" | "Hybrid")}
        >
          <option>All</option>
          <option>Skill</option>
          <option>MCP</option>
          <option>Hybrid</option>
        </select>
      </div>
      <p className="metric-line">Showing {filtered.length} of {rows.length}</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Capability</th>
              <th>Type</th>
              <th>Category</th>
              <th>Persona</th>
              <th>Impact</th>
              <th>Frequency</th>
              <th>Feasibility</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.capability_name}>
                <td>{row.capability_name}</td>
                <td>{row.type}</td>
                <td>{row.category}</td>
                <td>{row.persona}</td>
                <td>{row.impact}</td>
                <td>{row.frequency}</td>
                <td>{row.feasibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
