import { describe, it, expect } from "vitest";
import { creditsFromJSON } from "../../src/models/components/credits.js";

describe("Credits", () => {
  it("parses valid JSON with snake_case remapping", () => {
    const json = JSON.stringify({
      storage_bytes: 1048576,
      api_requests: 42,
      transformations: 10,
    });

    const result = creditsFromJSON(json);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.storageBytes).toBe(1048576);
      expect(result.value.apiRequests).toBe(42);
      expect(result.value.transformations).toBe(10);
    }
  });

  it("coerces missing storage_bytes to 0", () => {
    const json = JSON.stringify({
      api_requests: 42,
      transformations: 10,
    });
    const result = creditsFromJSON(json);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.storageBytes).toBe(0);
      expect(result.value.apiRequests).toBe(42);
      expect(result.value.transformations).toBe(10);
    }
  });

  it("coerces missing api_requests to 0", () => {
    const json = JSON.stringify({
      storage_bytes: 1048576,
      transformations: 10,
    });
    const result = creditsFromJSON(json);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.storageBytes).toBe(1048576);
      expect(result.value.apiRequests).toBe(0);
      expect(result.value.transformations).toBe(10);
    }
  });

  it("rejects non-JSON input", () => {
    const result = creditsFromJSON("not valid json");
    expect(result.ok).toBe(false);
  });
});
