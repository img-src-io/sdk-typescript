# HateoasLinks

## Example Usage

```typescript
import { HateoasLinks } from "@img-src/sdk/models/components";

let value: HateoasLinks = {
  self: "/api/v1/images/abc123",
  delete: "/api/v1/images/abc123",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `self`                      | *string*                    | :heavy_check_mark:          | Link to the resource itself | /api/v1/images/abc123       |
| `delete`                    | *string*                    | :heavy_check_mark:          | Link to delete the resource | /api/v1/images/abc123       |