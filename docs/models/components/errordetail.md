# ErrorDetail

## Example Usage

```typescript
import { ErrorDetail } from "@img-src/sdk/models/components";

let value: ErrorDetail = {
  code: "NOT_FOUND",
  message: "The requested resource was not found",
  status: 404,
  path: "/api/v1/images/nonexistent",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `code`                                                       | *string*                                                     | :heavy_check_mark:                                           | Error code (e.g., NOT_FOUND, UNAUTHORIZED, VALIDATION_ERROR) | NOT_FOUND                                                    |
| `message`                                                    | *string*                                                     | :heavy_check_mark:                                           | Human-readable error message                                 | The requested resource was not found                         |
| `status`                                                     | *number*                                                     | :heavy_check_mark:                                           | HTTP status code                                             | 404                                                          |
| `path`                                                       | *string*                                                     | :heavy_minus_sign:                                           | Request path (optional)                                      | /api/v1/images/nonexistent                                   |