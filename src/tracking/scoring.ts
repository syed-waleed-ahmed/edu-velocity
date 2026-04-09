import type { RawCapability } from "./types";

export function calculateScore(capability: Pick<RawCapability, "impact" | "frequency" | "feasibility">): number {
  return capability.impact + capability.frequency + capability.feasibility;
}
