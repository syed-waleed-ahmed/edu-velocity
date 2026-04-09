export type Category = "Engagement" | "Conversion" | "Creation" | "Connection" | "Knowledge" | "Control";
export type CapabilityType = "Skill" | "MCP" | "Hybrid";
export type Persona = "student" | "teacher" | "admin";
export type Effort = "S" | "M" | "L";

export type TrackingItem = {
  capability_name: string;
  category: Category;
  type: CapabilityType;
  persona: Persona;
  input: string;
  output_json_shape: string;
  ui_component: string;
  effort: Effort;
  risks: string[];
  dependencies: string[];
  source: string;
  source_link: string;
};

export type UseCaseItem = {
  use_case: string;
  target: Persona;
  trigger: string;
  steps: string[];
  result: string;
  success_criteria: string;
};

export type RawCapability = {
  capability_name: string;
  category: Category;
  type: CapabilityType;
  persona: Persona;
  input: string;
  output: Record<string, unknown>;
  effort: Effort;
  risks: string[];
  dependencies: string[];
  source: string;
  source_link: string;
  impact: number;
  frequency: number;
  feasibility: number;
  replicate_as_playbook?: string;
  setup_complexity?: "Low" | "Medium" | "High";
  auth_model?: "API key" | "OAuth" | "none";
  limits?: string;
};

export type ShortlistCapability = {
  capability_name: string;
  type: CapabilityType;
  category: Category;
  persona: Persona;
  impact: number;
  frequency: number;
  feasibility: number;
  score: number;
  rationale: string;
  requires_ui: boolean;
};

export type EvaluationResult = {
  capability_name: string;
  criteria_passed: boolean;
  notes: string;
};

export type HelloWorldResult = {
  capability_name: string;
  sample_input: Record<string, unknown>;
  sample_output: Record<string, unknown>;
  status: "pass" | "warn" | "fail";
  response_time_ms: number;
  issues_found: string[];
  evaluation_result?: EvaluationResult;
};

export type IssueRecord = {
  capability_name: string;
  issue_type: "auth" | "output quality" | "response time" | "rate limits" | "missing structure" | "dependency gap";
  severity: "low" | "medium" | "high";
  notes: string;
};
