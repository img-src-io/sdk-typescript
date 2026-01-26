# DeleteResponse

## Example Usage

```typescript
import { DeleteResponse } from "@img-src/sdk/models/components";

let value: DeleteResponse = {
  success: true,
  message: "Image deleted",
  deletedPaths: [
    "photo.webp",
    "blog/photo.webp",
  ],
  deletedAt: new Date("2025-01-21T12:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `success`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Operation success flag                                                                        | true                                                                                          |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable message                                                                        | Image deleted                                                                                 |
| `deletedPaths`                                                                                | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | List of deleted paths                                                                         | [<br/>"photo.webp",<br/>"blog/photo.webp"<br/>]                                               |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Deletion timestamp                                                                            | 2025-01-21T12:00:00Z                                                                          |