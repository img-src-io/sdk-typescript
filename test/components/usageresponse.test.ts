import { describe, it, expect } from "vitest";
import { usageResponseFromJSON } from "../../src/models/components/usageresponse.js";

describe("UsageResponse", () => {
  it("parses with credits nested object", () => {
    const json = JSON.stringify({
      plan: "pro",
      plan_name: "Pro Plan",
      plan_status: "active",
      subscription_ends_at: null,
      plan_limits: {
        max_uploads_per_month: null,
        max_storage_bytes: null,
        max_bandwidth_per_month: null,
        max_api_requests_per_month: null,
        max_transformations_per_month: null,
      },
      total_images: 250,
      storage_used_bytes: 104857600,
      storage_used_mb: 100,
      storage_used_gb: 0.1,
      current_period: {
        period: "2024-06",
        period_start: 1717200000,
        period_end: 1719792000,
        uploads: 30,
        bandwidth_bytes: 52428800,
        api_requests: 500,
        transformations: 200,
      },
      credits: {
        storage_bytes: 104857600,
        api_requests: 500,
        transformations: 200,
      },
    });

    const result = usageResponseFromJSON(json);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.plan).toBe("pro");
      expect(result.value.planName).toBe("Pro Plan");
      expect(result.value.planStatus).toBe("active");
      expect(result.value.subscriptionEndsAt).toBeNull();
      expect(result.value.totalImages).toBe(250);
      expect(result.value.credits.storageBytes).toBe(104857600);
      expect(result.value.credits.apiRequests).toBe(500);
      expect(result.value.credits.transformations).toBe(200);
      expect(result.value.currentPeriod.period).toBe("2024-06");
      expect(result.value.planLimits.maxUploadsPerMonth).toBeNull();
    }
  });

  it("rejects missing credits", () => {
    const json = JSON.stringify({
      plan: "free",
      plan_name: "Free Plan",
      plan_status: "active",
      subscription_ends_at: null,
      plan_limits: {
        max_uploads_per_month: 100,
        max_storage_bytes: 1073741824,
        max_bandwidth_per_month: 5368709120,
        max_api_requests_per_month: 1000,
        max_transformations_per_month: 500,
      },
      total_images: 10,
      storage_used_bytes: 1024,
      storage_used_mb: 0.001,
      storage_used_gb: 0,
      current_period: {
        period: "2024-06",
        period_start: 1717200000,
        period_end: 1719792000,
        uploads: 5,
        bandwidth_bytes: 1024,
        api_requests: 10,
        transformations: 3,
      },
    });

    const result = usageResponseFromJSON(json);
    expect(result.ok).toBe(false);
  });
});
