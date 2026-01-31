import { describe, it, expect } from "vitest";
import { createSignedUrlRequestToJSON } from "../../src/models/components/createsignedurlrequest.js";

describe("CreateSignedUrlRequest", () => {
  it("serializes with default expiresInSeconds: 3600", () => {
    const json = createSignedUrlRequestToJSON({});
    const parsed = JSON.parse(json);
    expect(parsed.expires_in_seconds).toBe(3600);
  });

  it("does not include a transformation field", () => {
    const json = createSignedUrlRequestToJSON({});
    const parsed = JSON.parse(json);
    expect(parsed).not.toHaveProperty("transformation");
  });

  it("serializes custom expiresInSeconds value", () => {
    const json = createSignedUrlRequestToJSON({ expiresInSeconds: 7200 });
    const parsed = JSON.parse(json);
    expect(parsed.expires_in_seconds).toBe(7200);
  });
});
