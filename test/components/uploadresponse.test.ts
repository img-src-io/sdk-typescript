import { describe, it, expect } from "vitest";
import { uploadResponseFromJSON } from "../../src/models/components/uploadresponse.js";

describe("UploadResponse", () => {
  const validJson = JSON.stringify({
    id: "abc1234567890123",
    hash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    url: "https://img-src.io/i/john/photo.webp",
    paths: ["/john/photo.webp"],
    is_new: true,
    size: 204800,
    format: "webp",
    dimensions: { width: 1920, height: 1080 },
    available_formats: {
      webp: "https://img-src.io/i/john/photo.webp",
      avif: "https://img-src.io/i/john/photo.avif",
      jpeg: "https://img-src.io/i/john/photo.jpeg",
    },
    visibility: "public",
    uploaded_at: "2024-01-15T10:30:00Z",
    _links: {
      self: "/api/v1/images/abc1234567890123",
      delete: "/api/v1/images/abc1234567890123",
    },
  });

  it("parses full response JSON including visibility", () => {
    const result = uploadResponseFromJSON(validJson);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.id).toBe("abc1234567890123");
      expect(result.value.visibility).toBe("public");
      expect(result.value.isNew).toBe(true);
      expect(result.value.size).toBe(204800);
      expect(result.value.availableFormats.webp).toBe(
        "https://img-src.io/i/john/photo.webp"
      );
      expect(result.value.links.self).toBe(
        "/api/v1/images/abc1234567890123"
      );
      expect(result.value.uploadedAt).toBeInstanceOf(Date);
    }
  });

  it("rejects when visibility is missing", () => {
    const incomplete = JSON.parse(validJson);
    delete incomplete.visibility;
    const result = uploadResponseFromJSON(JSON.stringify(incomplete));
    expect(result.ok).toBe(false);
  });
});
