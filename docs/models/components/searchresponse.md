# SearchResponse

## Example Usage

```typescript
import { SearchResponse } from "@img-src/sdk/models/components";

let value: SearchResponse = {
  results: [
    {
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
    },
  ],
  total: 5,
  query: "vacation",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `results`                                                            | [components.SearchResult](../../models/components/searchresult.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
| `total`                                                              | *number*                                                             | :heavy_check_mark:                                                   | Total number of matches                                              | 5                                                                    |
| `query`                                                              | *string*                                                             | :heavy_check_mark:                                                   | Original search query                                                | vacation                                                             |