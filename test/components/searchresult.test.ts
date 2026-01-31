import { describe, it, expect } from "vitest";
import { searchResultFromJSON } from "../../src/models/components/searchresult.js";

describe("SearchResult", () => {
  it("parses with visibility", () => {
    const json = JSON.stringify({
      id: "search123",
      original_filename: "banner.jpg",
      paths: ["/john/banner.jpg"],
      size: 512000,
      uploaded_at: "2024-03-10T08:00:00Z",
      url: "/api/v1/images/search123",
      visibility: "public",
    });

    const result = searchResultFromJSON(json);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.id).toBe("search123");
      expect(result.value.originalFilename).toBe("banner.jpg");
      expect(result.value.visibility).toBe("public");
      expect(result.value.uploadedAt).toBeInstanceOf(Date);
      expect(result.value.cdnUrl).toBeUndefined();
    }
  });

  it("rejects missing visibility", () => {
    const json = JSON.stringify({
      id: "search123",
      original_filename: "banner.jpg",
      paths: ["/john/banner.jpg"],
      size: 512000,
      uploaded_at: "2024-03-10T08:00:00Z",
      url: "/api/v1/images/search123",
    });

    const result = searchResultFromJSON(json);
    expect(result.ok).toBe(false);
  });
});
