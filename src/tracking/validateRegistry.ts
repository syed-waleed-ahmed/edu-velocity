import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import type { RawCapability, Category, CapabilityType, Persona, Effort } from "./types";

const rawPath = resolve(process.cwd(), "src", "tracking", "capabilities_raw.json");
const useCasesPath = resolve(process.cwd(), "src", "tracking", "useCases.json");

const validCategories = new Set<Category>(["Engagement", "Conversion", "Creation", "Connection", "Knowledge", "Control"]);
const validTypes = new Set<CapabilityType>(["Skill", "MCP", "Hybrid"]);
const validPersonas = new Set<Persona>(["student", "teacher", "admin"]);
const validEffort = new Set<Effort>(["S", "M", "L"]);
const validAuth = new Set(["API key", "OAuth", "none"]);
const validSetup = new Set(["Low", "Medium", "High"]);

function isScore(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value) && value >= 1 && value <= 5;
}

function main(): void {
  const raw = JSON.parse(readFileSync(rawPath, "utf-8")) as RawCapability[];
  const useCases = JSON.parse(readFileSync(useCasesPath, "utf-8")) as Array<{ use_case: string }>;
  const knownUseCases = new Set(useCases.map((entry) => entry.use_case));

  const errors: string[] = [];
  const names = new Set<string>();

  raw.forEach((item, index) => {
    const ref = `row ${index + 1} (${item.capability_name || "missing-name"})`;

    if (!item.capability_name?.trim()) errors.push(`${ref}: missing capability_name`);
    if (names.has(item.capability_name)) errors.push(`${ref}: duplicate capability_name`);
    names.add(item.capability_name);

    if (!validCategories.has(item.category)) errors.push(`${ref}: invalid category '${String(item.category)}'`);
    if (!validTypes.has(item.type)) errors.push(`${ref}: invalid type '${String(item.type)}'`);
    if (!validPersonas.has(item.persona)) errors.push(`${ref}: invalid persona '${String(item.persona)}'`);
    if (!validEffort.has(item.effort)) errors.push(`${ref}: invalid effort '${String(item.effort)}'`);

    if (!item.input?.trim()) errors.push(`${ref}: missing input`);
    if (!item.output || typeof item.output !== "object" || Object.keys(item.output).length === 0) {
      errors.push(`${ref}: output must be a non-empty object`);
    }

    if (!Array.isArray(item.use_cases) || item.use_cases.length === 0) {
      errors.push(`${ref}: use_cases must be a non-empty string array`);
    } else {
      item.use_cases.forEach((useCase) => {
        if (!knownUseCases.has(useCase)) {
          errors.push(`${ref}: unknown use_case '${useCase}'`);
        }
      });
    }

    if (!Array.isArray(item.risks) || item.risks.length === 0) errors.push(`${ref}: risks must be non-empty`);
    if (!Array.isArray(item.dependencies) || item.dependencies.length === 0) errors.push(`${ref}: dependencies must be non-empty`);

    if (!item.source?.trim()) errors.push(`${ref}: missing source`);
    if (!item.source_link?.startsWith("http")) errors.push(`${ref}: source_link must be a valid URL`);

    if (!isScore(item.impact)) errors.push(`${ref}: impact must be integer 1-5`);
    if (!isScore(item.frequency)) errors.push(`${ref}: frequency must be integer 1-5`);
    if (!isScore(item.feasibility)) errors.push(`${ref}: feasibility must be integer 1-5`);

    if (item.type === "MCP" || item.type === "Hybrid") {
      if (!item.setup_complexity || !validSetup.has(item.setup_complexity)) {
        errors.push(`${ref}: setup_complexity required for MCP/Hybrid (Low|Medium|High)`);
      }
      if (!item.auth_model || !validAuth.has(item.auth_model)) {
        errors.push(`${ref}: auth_model required for MCP/Hybrid (API key|OAuth|none)`);
      }
      if (!item.limits?.trim()) {
        errors.push(`${ref}: limits required for MCP/Hybrid`);
      }
    }
  });

  if (errors.length > 0) {
    console.error("Registry validation failed:\n");
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log(`Registry validation passed for ${raw.length} capabilities.`);
}

main();
