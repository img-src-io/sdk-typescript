import { describe, it, expect } from "vitest";
import { userSettingsFromJSON } from "../../src/models/components/usersettings.js";

describe("UserSettings", () => {
  it("parses with plan field", () => {
    const json = JSON.stringify({
      id: "user_abc123",
      username: "john",
      email: "john@example.com",
      plan: "pro",
      delivery_formats: ["webp", "avif", "jpeg"],
      default_quality: 85,
      default_fit_mode: "cover",
      default_max_width: 4000,
      default_max_height: 3000,
      theme: "dark",
      language: "en",
      created_at: 1700000000,
      updated_at: 1700001000,
      total_uploads: 150,
      storage_used_bytes: 52428800,
    });

    const result = userSettingsFromJSON(json);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.plan).toBe("pro");
      expect(result.value.username).toBe("john");
      expect(result.value.deliveryFormats).toEqual(["webp", "avif", "jpeg"]);
      expect(result.value.defaultQuality).toBe(85);
      expect(result.value.defaultFitMode).toBe("cover");
      expect(result.value.defaultMaxWidth).toBe(4000);
      expect(result.value.storageUsedBytes).toBe(52428800);
    }
  });

  it("parses without optional fields", () => {
    const json = JSON.stringify({
      id: "user_abc123",
      username: "john",
      plan: "free",
      delivery_formats: ["webp"],
      default_quality: 80,
      default_fit_mode: "contain",
      theme: "light",
      language: "en",
      created_at: 1700000000,
      updated_at: 1700000000,
      total_uploads: 0,
      storage_used_bytes: 0,
    });

    const result = userSettingsFromJSON(json);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.plan).toBe("free");
      expect(result.value.email).toBeUndefined();
      expect(result.value.defaultMaxWidth).toBeUndefined();
      expect(result.value.defaultMaxHeight).toBeUndefined();
    }
  });
});
