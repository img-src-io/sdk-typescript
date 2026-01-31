import { describe, it, expect } from "vitest";
import { metadataResponseFromJSON } from "../../src/models/components/metadataresponse.js";

describe("MetadataResponse", () => {
  it("parses with visibility", () => {
    const json = JSON.stringify({
      id: "meta123",
      metadata: {
        hash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        original_filename: "photo.png",
        size: 204800,
        uploaded_at: "2024-01-15T10:30:00Z",
        mime_type: "image/png",
        width: 1920,
        height: 1080,
      },
      visibility: "private",
      urls: {
        original: "https://cdn.img-src.io/john/photo.png",
        webp: "https://cdn.img-src.io/john/photo.webp",
        avif: "https://cdn.img-src.io/john/photo.avif",
        jpeg: "https://cdn.img-src.io/john/photo.jpeg",
        png: "https://cdn.img-src.io/john/photo.png",
      },
      _links: {
        self: "/api/v1/images/meta123",
        delete: "/api/v1/images/meta123",
      },
    });

    const result = metadataResponseFromJSON(json);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.id).toBe("meta123");
      expect(result.value.visibility).toBe("private");
      expect(result.value.metadata.originalFilename).toBe("photo.png");
      expect(result.value.metadata.uploadedAt).toBeInstanceOf(Date);
      expect(result.value.urls.webp).toBe(
        "https://cdn.img-src.io/john/photo.webp"
      );
      expect(result.value.links.self).toBe("/api/v1/images/meta123");
    }
  });

  it("rejects missing visibility", () => {
    const json = JSON.stringify({
      id: "meta123",
      metadata: {
        hash: "abc",
        original_filename: "photo.png",
        size: 100,
        uploaded_at: "2024-01-15T10:30:00Z",
        mime_type: "image/png",
      },
      urls: {
        original: "a",
        webp: "b",
        avif: "c",
        jpeg: "d",
        png: "e",
      },
      _links: { self: "/a", delete: "/b" },
    });

    const result = metadataResponseFromJSON(json);
    expect(result.ok).toBe(false);
  });
});
