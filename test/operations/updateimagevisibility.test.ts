import { describe, it, expect } from "vitest";
import {
  UpdateImageVisibilityRequest$outboundSchema,
  UpdateImageVisibilityResponse$inboundSchema,
} from "../../src/models/operations/updateimagevisibility.js";

describe("UpdateImageVisibilityRequest (operation)", () => {
  it("serializes { id, body }", () => {
    const result = UpdateImageVisibilityRequest$outboundSchema.parse({
      id: "img123",
      body: { visibility: "public" },
    });
    expect(result).toEqual({
      id: "img123",
      body: { visibility: "public" },
    });
  });

  it("rejects invalid visibility in body", () => {
    expect(() =>
      UpdateImageVisibilityRequest$outboundSchema.parse({
        id: "img123",
        body: { visibility: "invalid" },
      })
    ).toThrow();
  });
});

describe("UpdateImageVisibilityResponse (operation)", () => {
  it("parses response with remap", () => {
    const raw = {
      HttpMeta: {
        Response: new Response("ok", { status: 200 }),
        Request: new Request("https://api.img-src.io/api/v1/images/img123"),
      },
      UpdateVisibilityResponse: {
        id: "img123",
        visibility: "private",
        message: "Visibility updated",
      },
    };

    const result = UpdateImageVisibilityResponse$inboundSchema.parse(raw);
    expect(result.httpMeta.response).toBeInstanceOf(Response);
    expect(result.httpMeta.request).toBeInstanceOf(Request);
    expect(result.updateVisibilityResponse).toBeDefined();
    expect(result.updateVisibilityResponse!.id).toBe("img123");
    expect(result.updateVisibilityResponse!.visibility).toBe("private");
  });

  it("parses response without UpdateVisibilityResponse", () => {
    const raw = {
      HttpMeta: {
        Response: new Response(null, { status: 204 }),
        Request: new Request("https://api.img-src.io/api/v1/images/img123"),
      },
    };

    const result = UpdateImageVisibilityResponse$inboundSchema.parse(raw);
    expect(result.httpMeta).toBeDefined();
    expect(result.updateVisibilityResponse).toBeUndefined();
  });
});
