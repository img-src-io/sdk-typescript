# SearchResult

## Example Usage

```typescript
import { SearchResult } from "@img-src/sdk/models/components";

let value: SearchResult = {
  id: "abcdef1234567890",
  originalFilename: "vacation-photo.jpg",
  sanitizedFilename: "vacation-photo.jpg",
  paths: [
    "photos/vacation.jpg",
  ],
  size: 1024000,
  uploadedAt: new Date("2025-01-21T12:00:00Z"),
  url: "/api/v1/images/abcdef1234567890",
  cdnUrl: "https://cdn.img-src.io/john/photos/vacation.jpg",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Image ID                                                                                      | abcdef1234567890                                                                              |
| `originalFilename`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | Original filename                                                                             | vacation-photo.jpg                                                                            |
| `sanitizedFilename`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | Sanitized filename                                                                            | vacation-photo.jpg                                                                            |
| `paths`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | All paths for this image                                                                      | [<br/>"photos/vacation.jpg"<br/>]                                                             |
| `size`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | File size in bytes                                                                            | 1024000                                                                                       |
| `uploadedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Upload timestamp                                                                              | 2025-01-21T12:00:00Z                                                                          |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | API endpoint URL                                                                              | /api/v1/images/abcdef1234567890                                                               |
| `cdnUrl`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | CDN URL                                                                                       | https://cdn.img-src.io/john/photos/vacation.jpg                                               |