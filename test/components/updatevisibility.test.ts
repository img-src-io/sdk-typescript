import { describe, it, expect } from "vitest";
import {
  UpdateVisibilityRequest$outboundSchema,
  updateVisibilityRequestToJSON,
} from "../../src/models/components/updatevisibilityrequest.js";
import { updateVisibilityResponseFromJSON } from "../../src/models/components/updatevisibilityresponse.js";

describe("UpdateVisibilityRequest", () => {
  it("serializes { visibility: 'public' }", () => {
    const result = UpdateVisibilityRequest$outboundSchema.parse({
      visibility: "public",
    });
    expect(result).toEqual({ visibility: "public" });
  });

  it("serializes to JSON string", () => {
    const json = updateVisibilityRequestToJSON({ visibility: "private" });
    expect(JSON.parse(json)).toEqual({ visibility: "private" });
  });

  it("rejects invalid visibility values", () => {
    expect(() =>
      UpdateVisibilityRequest$outboundSchema.parse({
        visibility: "unlisted",
      })
    ).toThrow();
  });
});

describe("UpdateVisibilityResponse", () => {
  it("parses valid JSON", () => {
    const json = JSON.stringify({
      id: "abc123",
      visibility: "public",
      message: "Visibility updated",
    });

    const result = updateVisibilityResponseFromJSON(json);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.id).toBe("abc123");
      expect(result.value.visibility).toBe("public");
      expect(result.value.message).toBe("Visibility updated");
    }
  });
});
