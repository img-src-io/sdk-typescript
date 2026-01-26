# UsageResponse

## Example Usage

```typescript
import { UsageResponse } from "@img-src/sdk/models/components";

let value: UsageResponse = {
  plan: "free",
  planName: "Free Plan",
  planStatus: "active",
  subscriptionEndsAt: null,
  planLimits: {
    maxUploadsPerMonth: 1000,
    maxStorageBytes: 5368709120,
    maxBandwidthPerMonth: 10737418240,
    maxApiRequestsPerMonth: 100000,
    maxTransformationsPerMonth: 10000,
  },
  totalImages: 150,
  storageUsedBytes: 104857600,
  storageUsedMb: 100,
  storageUsedGb: 0.1,
  currentPeriod: {
    period: "2025-01",
    periodStart: 1735689600,
    periodEnd: 1738368000,
    uploads: 42,
    bandwidthBytes: 1073741824,
    apiRequests: 5000,
    transformations: 500,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `plan`                                                               | *string*                                                             | :heavy_check_mark:                                                   | User's plan ID                                                       | free                                                                 |
| `planName`                                                           | *string*                                                             | :heavy_check_mark:                                                   | Human-readable plan name                                             | Free Plan                                                            |
| `planStatus`                                                         | [components.PlanStatus](../../models/components/planstatus.md)       | :heavy_check_mark:                                                   | Current plan status                                                  | active                                                               |
| `subscriptionEndsAt`                                                 | *number*                                                             | :heavy_check_mark:                                                   | Unix timestamp when subscription ends (for cancelling plans)         | <nil>                                                                |
| `planLimits`                                                         | [components.PlanLimits](../../models/components/planlimits.md)       | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
| `totalImages`                                                        | *number*                                                             | :heavy_check_mark:                                                   | Total images (lifetime)                                              | 150                                                                  |
| `storageUsedBytes`                                                   | *number*                                                             | :heavy_check_mark:                                                   | Total storage used in bytes                                          | 104857600                                                            |
| `storageUsedMb`                                                      | *number*                                                             | :heavy_check_mark:                                                   | Total storage used in MB                                             | 100                                                                  |
| `storageUsedGb`                                                      | *number*                                                             | :heavy_check_mark:                                                   | Total storage used in GB                                             | 0.1                                                                  |
| `currentPeriod`                                                      | [components.CurrentPeriod](../../models/components/currentperiod.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |