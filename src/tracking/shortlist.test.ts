import { describe, expect, it } from "vitest";
import { buildShortlist } from "./shortlist";
import rawCapabilities from "./capabilities_raw.json";
import type { RawCapability } from "./types";

describe("shortlist", () => {
  it("returns top 10 sorted capabilities with requires_ui", () => {
    const result = buildShortlist(rawCapabilities as RawCapability[]);
    expect(result).toHaveLength(10);
    expect(result[0].score).toBeGreaterThanOrEqual(result[1].score);
    expect(typeof result[0].requires_ui).toBe("boolean");
  });
});
