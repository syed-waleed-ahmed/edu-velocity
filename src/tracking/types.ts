export type Category = "Engagement" | "Conversion" | "Creation" | "Connection" | "Knowledge" | "Control";
export type CapabilityType = "Skill" | "MCP" | "Hybrid";
export type Persona = "student" | "teacher" | "admin";
export type Effort = "S" | "M" | "L";
export type UiComponentType = "flashcards" | "quiz" | "study_plan" | "table" | "text";

export type TrackingInput = {
  description: string;
  example: string;
};

export type TrackingOutputShape = {
  summary: "string";
  flashcards: Array<{ question: "string"; answer: "string" }>;
  quiz: Array<{ question: "string"; options: ["string"] | string[]; correct: "string" }>;
  study_plan: Array<{ title: "string"; duration: "string"; objective: "string" }>;
};

export type VelocityFactors = {
  build_time_estimate: string;
  integration_complexity: "low" | "medium" | "high";
  reusability_score: string;
};

export type TrackingSource = {
  type: "official-doc" | "internal-playbook";
  name: string;
  link: string;
  notes: string;
};

export type ValidationMapping = {
  prototype_mode: "MCP Study Package" | "Skill Learning";
  success_criteria_link: string;
};

export type TrackingItem = {
  capability_name: string;
  type: CapabilityType;
  persona: Persona;
  category: Category;
  input: TrackingInput;
  output_json_shape: TrackingOutputShape;
  ui_component: UiComponentType;
  effort: Effort;
  velocity_factors: VelocityFactors;
  risks: string[];
  dependencies: string[];
  source: TrackingSource;
  implementation_notes: string;
  success_criteria: string;
  validation_mapping: ValidationMapping;
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

export type RunHistoryEntry = {
  capability_name: string;
  mode_used: "MCP Study Package" | "Skill Learning";
  output_generated: Record<string, unknown>;
  response_time_ms: number;
  status: "success" | "failure";
  executed_at: string;
};
