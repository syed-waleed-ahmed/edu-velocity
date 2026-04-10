type SuccessCriteriaState = {
  triggerSuccessRate: string;
  toolCalls: string;
  apiErrors: string;
  consistencyAcrossRuns: string;
  notes: string;
};

type SuccessCriteriaEvaluationPanelProps = {
  values: SuccessCriteriaState;
  onChange: (next: SuccessCriteriaState) => void;
};

export function SuccessCriteriaEvaluationPanel({ values, onChange }: SuccessCriteriaEvaluationPanelProps) {
  function update<K extends keyof SuccessCriteriaState>(key: K, value: SuccessCriteriaState[K]) {
    onChange({ ...values, [key]: value });
  }

  return (
    <section className="success-panel">
      <h4 className="section-title">Success Criteria Evaluation</h4>
      <p className="metric-line">Capture run quality for prototype validation.</p>

      <div className="form-row">
        <label htmlFor="trigger-success">Trigger success rate (%)</label>
        <input
          id="trigger-success"
          className="input"
          value={values.triggerSuccessRate}
          onChange={(e) => update("triggerSuccessRate", e.target.value)}
          placeholder="e.g. 90"
        />
      </div>

      <div className="form-row">
        <label htmlFor="tool-calls">Number of tool calls</label>
        <input
          id="tool-calls"
          className="input"
          value={values.toolCalls}
          onChange={(e) => update("toolCalls", e.target.value)}
          placeholder="e.g. 2"
        />
      </div>

      <div className="form-row">
        <label htmlFor="api-errors">API errors</label>
        <input
          id="api-errors"
          className="input"
          value={values.apiErrors}
          onChange={(e) => update("apiErrors", e.target.value)}
          placeholder="e.g. 0"
        />
      </div>

      <div className="form-row">
        <label htmlFor="consistency-runs">Consistency across runs</label>
        <input
          id="consistency-runs"
          className="input"
          value={values.consistencyAcrossRuns}
          onChange={(e) => update("consistencyAcrossRuns", e.target.value)}
          placeholder="High / Medium / Low"
        />
      </div>

      <div className="form-row">
        <label htmlFor="eval-notes">Notes (qualitative assessment)</label>
        <textarea
          id="eval-notes"
          className="input success-notes"
          value={values.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Quality observations and follow-up actions"
        />
      </div>
    </section>
  );
}
