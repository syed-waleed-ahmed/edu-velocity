export type QuantitativeCriteria = {
  skill_triggers_on_relevant_queries: boolean;
  workflow_steps_within_limit: boolean;
  failed_api_calls: number;
};

export type QualitativeCriteria = {
  no_next_step_prompt_needed: boolean;
  completes_without_user_correction: boolean;
  consistent_across_runs: boolean;
};

export type CriteriaSummary = {
  quantitative: QuantitativeCriteria;
  qualitative: QualitativeCriteria;
  passed: boolean;
};

export type LinkedEvaluationResult = {
  capability_name: string;
  criteria_passed: boolean;
  notes: string;
};

export function evaluateCriteria(input: {
  triggerMatched: boolean;
  stepsUsed: number;
  stepLimit: number;
  failedApiCalls: number;
  requiresCorrection: boolean;
  consistentAcrossRuns: boolean;
}): CriteriaSummary {
  const quantitative: QuantitativeCriteria = {
    skill_triggers_on_relevant_queries: input.triggerMatched,
    workflow_steps_within_limit: input.stepsUsed <= input.stepLimit,
    failed_api_calls: input.failedApiCalls
  };

  const qualitative: QualitativeCriteria = {
    no_next_step_prompt_needed: !input.requiresCorrection,
    completes_without_user_correction: !input.requiresCorrection,
    consistent_across_runs: input.consistentAcrossRuns
  };

  const passed =
    quantitative.skill_triggers_on_relevant_queries &&
    quantitative.workflow_steps_within_limit &&
    quantitative.failed_api_calls === 0 &&
    qualitative.no_next_step_prompt_needed &&
    qualitative.completes_without_user_correction &&
    qualitative.consistent_across_runs;

  return { quantitative, qualitative, passed };
}

export function toLinkedEvaluationResult(input: {
  capabilityName: string;
  criteria: CriteriaSummary;
  issuesFound: string[];
}): LinkedEvaluationResult {
  const notes: string[] = [];

  if (!input.criteria.quantitative.skill_triggers_on_relevant_queries) {
    notes.push("trigger mismatch");
  }

  if (!input.criteria.quantitative.workflow_steps_within_limit) {
    notes.push("workflow exceeded step limit");
  }

  if (input.criteria.quantitative.failed_api_calls > 0) {
    notes.push(`failed API calls: ${input.criteria.quantitative.failed_api_calls}`);
  }

  if (!input.criteria.qualitative.no_next_step_prompt_needed) {
    notes.push("required follow-up prompting");
  }

  if (!input.criteria.qualitative.completes_without_user_correction) {
    notes.push("required user correction");
  }

  if (!input.criteria.qualitative.consistent_across_runs) {
    notes.push("inconsistent across runs");
  }

  if (input.issuesFound.length > 0) {
    notes.push(`issues observed: ${input.issuesFound.join(", ")}`);
  }

  return {
    capability_name: input.capabilityName,
    criteria_passed: input.criteria.passed,
    notes: notes.join("; ") || "All defined success criteria passed with no issues."
  };
}
