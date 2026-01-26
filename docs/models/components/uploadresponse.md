# UploadResponse

## Example Usage

```typescript
import { UploadResponse } from "@img-src/sdk/models/components";

let value: UploadResponse = {
  id: "abcdef1234567890",
  hash: "abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
  url: "/john/blog/2024/photo.png",
  paths: [
    "blog/2024/photo.png",
  ],
  isNew: true,
  size: 1024000,
  format: "png",
  dimensions: {
    width: 1920,
    height: 1080,
  },
  availableFormats: {
    webp: "https://cdn.img-src.io/john/photo.webp",
    avif: "https://cdn.img-src.io/john/photo.avif",
    jpeg: "https://cdn.img-src.io/john/photo.jpg",
  },
  uploadedAt: new Date("2025-01-21T12:00:00Z"),
  links: {
    self: "/api/v1/images/abc123",
    delete: "/api/v1/images/abc123",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Image ID (first 16 characters of SHA256 hash)                                                 | abcdef1234567890                                                                              |
| `hash`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Full SHA256 hash of the image content                                                         | abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890                              |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | Primary CDN URL for the image                                                                 | /john/blog/2024/photo.png                                                                     |
| `paths`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | All paths where this image is accessible                                                      | [<br/>"blog/2024/photo.png"<br/>]                                                             |
| `isNew`                                                                                       | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether this is a newly uploaded image (false if duplicate)                                   | true                                                                                          |
| `size`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | File size in bytes                                                                            | 1024000                                                                                       |
| `format`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Detected image format                                                                         | png                                                                                           |
| `dimensions`                                                                                  | [components.ImageDimensions](../../models/components/imagedimensions.md)                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `availableFormats`                                                                            | [components.AvailableFormats](../../models/components/availableformats.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `uploadedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Upload timestamp (RFC3339 format)                                                             | 2025-01-21T12:00:00Z                                                                          |
| `links`                                                                                       | [components.HateoasLinks](../../models/components/hateoaslinks.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |