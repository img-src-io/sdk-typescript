# ImageListItem

## Example Usage

```typescript
import { ImageListItem } from "@img-src/sdk/models/components";

let value: ImageListItem = {
  id: "abcdef1234567890",
  originalFilename: "my-photo.jpg",
  sanitizedFilename: "my-photo.jpg",
  size: 1024000,
  uploadedAt: new Date("2025-01-21T12:00:00Z"),
  url: "/api/v1/images/abcdef1234567890",
  cdnUrl: "https://cdn.img-src.io/john/photo.webp",
  paths: [
    "photo.webp",
    "blog/photo.webp",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Image ID                                                                                      | abcdef1234567890                                                                              |
| `originalFilename`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | Original filename as uploaded                                                                 | my-photo.jpg                                                                                  |
| `sanitizedFilename`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | Sanitized filename (URL-safe)                                                                 | my-photo.jpg                                                                                  |
| `size`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | File size in bytes                                                                            | 1024000                                                                                       |
| `uploadedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Upload timestamp                                                                              | 2025-01-21T12:00:00Z                                                                          |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | API endpoint URL                                                                              | /api/v1/images/abcdef1234567890                                                               |
| `cdnUrl`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | CDN URL for direct access                                                                     | https://cdn.img-src.io/john/photo.webp                                                        |
| `paths`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | All paths for this image                                                                      | [<br/>"photo.webp",<br/>"blog/photo.webp"<br/>]                                               |