# PathDeleteResponse

## Example Usage

```typescript
import { PathDeleteResponse } from "@img-src/sdk/models/components";

let value: PathDeleteResponse = {
  success: true,
  message: "Path removed",
  remainingPaths: [
    "blog/photo.webp",
  ],
  imageDeleted: false,
  deletedAt: new Date("2025-01-21T12:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `success`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Operation success flag                                                                        | true                                                                                          |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable message                                                                        | Path removed                                                                                  |
| `remainingPaths`                                                                              | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Remaining paths for the image                                                                 | [<br/>"blog/photo.webp"<br/>]                                                                 |
| `imageDeleted`                                                                                | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the image itself was deleted (last path removed)                                      | false                                                                                         |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Deletion timestamp                                                                            | 2025-01-21T12:00:00Z                                                                          |