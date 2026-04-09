import { describe, expect, it } from "vitest";
import shortlist from "../../tracking/capabilities_shortlist.json";
import { runHelloWorldTests } from "./helloWorldTests";
import type { ShortlistCapability } from "../../tracking/types";

describe("hello-world evaluator", () => {
  it("produces one result per shortlisted capability", () => {
    const { results, issues } = runHelloWorldTests(shortlist as ShortlistCapability[]);
    expect(results).toHaveLength((shortlist as ShortlistCapability[]).length);
    expect(issues.length).toBeGreaterThanOrEqual(0);
    expect(results[0]).toHaveProperty("sample_output");
  });
});
