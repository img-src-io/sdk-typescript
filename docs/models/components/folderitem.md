# FolderItem

## Example Usage

```typescript
import { FolderItem } from "@img-src/sdk/models/components";

let value: FolderItem = {
  name: "blog",
  imageCount: 42,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `name`                                            | *string*                                          | :heavy_check_mark:                                | Folder name                                       | blog                                              |
| `imageCount`                                      | *number*                                          | :heavy_check_mark:                                | Number of images in folder (including subfolders) | 42                                                |