# Preset

## Example Usage

```typescript
import { Preset } from "@img-src/sdk/models/components";

let value: Preset = {
  id: "preset_abc123",
  name: "thumbnail",
  description: "200x200 thumbnail with cover fit",
  params: {
    "w": 200,
    "h": 200,
    "fit": "cover",
    "format": "webp",
  },
  createdAt: 1704067200,
  updatedAt: 1704067200,
  usageCount: 42,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | Preset ID                                                | preset_abc123                                            |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | Preset name                                              | thumbnail                                                |
| `description`                                            | *string*                                                 | :heavy_check_mark:                                       | Optional description                                     | 200x200 thumbnail with cover fit                         |
| `params`                                                 | Record<string, *any*>                                    | :heavy_check_mark:                                       | Transformation parameters                                | {<br/>"w": 200,<br/>"h": 200,<br/>"fit": "cover",<br/>"format": "webp"<br/>} |
| `createdAt`                                              | *number*                                                 | :heavy_check_mark:                                       | Creation timestamp (Unix epoch)                          | 1704067200                                               |
| `updatedAt`                                              | *number*                                                 | :heavy_check_mark:                                       | Last update timestamp (Unix epoch)                       | 1704067200                                               |
| `usageCount`                                             | *number*                                                 | :heavy_check_mark:                                       | Number of times this preset has been used                | 42                                                       |