# PlanLimits

## Example Usage

```typescript
import { PlanLimits } from "@img-src/sdk/models/components";

let value: PlanLimits = {
  maxUploadsPerMonth: 1000,
  maxStorageBytes: 5368709120,
  maxBandwidthPerMonth: 10737418240,
  maxApiRequestsPerMonth: 100000,
  maxTransformationsPerMonth: 10000,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `maxUploadsPerMonth`                                       | *number*                                                   | :heavy_check_mark:                                         | Maximum uploads per month (null = unlimited)               | 1000                                                       |
| `maxStorageBytes`                                          | *number*                                                   | :heavy_check_mark:                                         | Maximum storage in bytes (null = unlimited)                | 5368709120                                                 |
| `maxBandwidthPerMonth`                                     | *number*                                                   | :heavy_check_mark:                                         | Maximum bandwidth per month in bytes (null = unlimited)    | 10737418240                                                |
| `maxApiRequestsPerMonth`                                   | *number*                                                   | :heavy_check_mark:                                         | Maximum API requests per month (null = unlimited)          | 100000                                                     |
| `maxTransformationsPerMonth`                               | *number*                                                   | :heavy_check_mark:                                         | Maximum image transformations per month (null = unlimited) | 10000                                                      |