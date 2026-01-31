import { describe, it, expect } from "vitest";
import { activeSignedUrlFromJSON } from "../../src/models/components/activesignedurl.js";

describe("ActiveSignedUrl", () => {
  it("parses valid JSON with snake_case remapping", () => {
    const json = JSON.stringify({
      signed_url: "https://example.com/signed?token=abc",
      expires_at: 1700000000,
    });

    const result = activeSignedUrlFromJSON(json);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.signedUrl).toBe(
        "https://example.com/signed?token=abc"
      );
      expect(result.value.expiresAt).toBe(1700000000);
    }
  });

  it("coerces missing signed_url to empty string", () => {
    const json = JSON.stringify({ expires_at: 1700000000 });
    const result = activeSignedUrlFromJSON(json);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.signedUrl).toBe("");
      expect(result.value.expiresAt).toBe(1700000000);
    }
  });

  it("coerces missing expires_at to 0", () => {
    const json = JSON.stringify({
      signed_url: "https://example.com/signed?token=abc",
    });
    const result = activeSignedUrlFromJSON(json);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.signedUrl).toBe(
        "https://example.com/signed?token=abc"
      );
      expect(result.value.expiresAt).toBe(0);
    }
  });

  it("rejects non-JSON input", () => {
    const result = activeSignedUrlFromJSON("not valid json");
    expect(result.ok).toBe(false);
  });
});
