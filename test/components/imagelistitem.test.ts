import { describe, it, expect } from "vitest";
import { imageListItemFromJSON } from "../../src/models/components/imagelistitem.js";

describe("ImageListItem", () => {
  const baseItem = {
    id: "img123",
    original_filename: "photo.png",
    sanitized_filename: "photo.png",
    size: 102400,
    uploaded_at: "2024-06-01T12:00:00Z",
    url: "/api/v1/images/img123",
    cdn_url: "https://cdn.img-src.io/john/photo.png",
    paths: ["/john/photo.png"],
    visibility: "private",
  };

  it("parses with visibility and optional fields", () => {
    const result = imageListItemFromJSON(JSON.stringify(baseItem));
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.id).toBe("img123");
      expect(result.value.originalFilename).toBe("photo.png");
      expect(result.value.visibility).toBe("private");
      expect(result.value.uploadedAt).toBeInstanceOf(Date);
      expect(result.value.activeSignedUrl).toBeUndefined();
    }
  });

  it("works without active_signed_url field", () => {
    const result = imageListItemFromJSON(JSON.stringify(baseItem));
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.activeSignedUrl).toBeUndefined();
    }
  });

  it("works with active_signed_url field present", () => {
    const withSignedUrl = {
      ...baseItem,
      active_signed_url: {
        signed_url: "https://example.com/signed?token=xyz",
        expires_at: 1700000000,
      },
    };
    const result = imageListItemFromJSON(JSON.stringify(withSignedUrl));
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.activeSignedUrl).toBeDefined();
      expect(result.value.activeSignedUrl!.signedUrl).toBe(
        "https://example.com/signed?token=xyz"
      );
      expect(result.value.activeSignedUrl!.expiresAt).toBe(1700000000);
    }
  });
});
