# ImageListResponse

## Example Usage

```typescript
import { ImageListResponse } from "@img-src/sdk/models/components";

let value: ImageListResponse = {
  images: [
    {
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
    },
  ],
  folders: [],
  total: 150,
  limit: 50,
  offset: 0,
  hasMore: true,
  pathFilter: "blog/2024",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `images`                                                               | [components.ImageListItem](../../models/components/imagelistitem.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `folders`                                                              | [components.FolderItem](../../models/components/folderitem.md)[]       | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `total`                                                                | *number*                                                               | :heavy_check_mark:                                                     | Total count of images (in current path)                                | 150                                                                    |
| `limit`                                                                | *number*                                                               | :heavy_check_mark:                                                     | Maximum items per page                                                 | 50                                                                     |
| `offset`                                                               | *number*                                                               | :heavy_check_mark:                                                     | Current offset                                                         | 0                                                                      |
| `hasMore`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | Whether more items exist                                               | true                                                                   |
| `pathFilter`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | Current path filter (if any)                                           | blog/2024                                                              |