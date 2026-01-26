# CurrentPeriod

## Example Usage

```typescript
import { CurrentPeriod } from "@img-src/sdk/models/components";

let value: CurrentPeriod = {
  period: "2025-01",
  periodStart: 1735689600,
  periodEnd: 1738368000,
  uploads: 42,
  bandwidthBytes: 1073741824,
  apiRequests: 5000,
  transformations: 500,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `period`                            | *string*                            | :heavy_check_mark:                  | Period identifier (YYYY-MM format)  | 2025-01                             |
| `periodStart`                       | *number*                            | :heavy_check_mark:                  | Unix timestamp of period start      | 1735689600                          |
| `periodEnd`                         | *number*                            | :heavy_check_mark:                  | Unix timestamp of period end        | 1738368000                          |
| `uploads`                           | *number*                            | :heavy_check_mark:                  | Uploads this period                 | 42                                  |
| `bandwidthBytes`                    | *number*                            | :heavy_check_mark:                  | Bandwidth used this period in bytes | 1073741824                          |
| `apiRequests`                       | *number*                            | :heavy_check_mark:                  | API requests this period            | 5000                                |
| `transformations`                   | *number*                            | :heavy_check_mark:                  | Image transformations this period   | 500                                 |