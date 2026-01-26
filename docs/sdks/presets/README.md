# Presets

## Overview

### Available Operations

* [listPresets](#listpresets) - List presets
* [createPreset](#createpreset) - Create preset
* [getPreset](#getpreset) - Get preset
* [updatePreset](#updatepreset) - Update preset
* [deletePreset](#deletepreset) - Delete preset

## listPresets

Returns all transformation presets for the authenticated user. Requires Pro plan.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPresets" method="get" path="/api/v1/settings/presets" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.presets.listPresets();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { presetsListPresets } from "@img-src/sdk/funcs/presetsListPresets.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await presetsListPresets(imgsrc);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("presetsListPresets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPresetsResponse](../../models/operations/listpresetsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 401, 403                  | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |

## createPreset

Creates a new transformation preset. Requires Pro plan.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPreset" method="post" path="/api/v1/settings/presets" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.presets.createPreset({
    name: "thumbnail",
    description: "200x200 thumbnail with cover fit",
    params: {
      "w": 200,
      "h": 200,
      "fit": "cover",
      "format": "webp",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { presetsCreatePreset } from "@img-src/sdk/funcs/presetsCreatePreset.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await presetsCreatePreset(imgsrc, {
    name: "thumbnail",
    description: "200x200 thumbnail with cover fit",
    params: {
      "w": 200,
      "h": 200,
      "fit": "cover",
      "format": "webp",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("presetsCreatePreset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreatePresetRequest](../../models/components/createpresetrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePresetResponse](../../models/operations/createpresetresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 401, 403, 409        | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |

## getPreset

Returns a specific preset by ID. Requires Pro plan.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPreset" method="get" path="/api/v1/settings/presets/{id}" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.presets.getPreset("preset_abc123");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { presetsGetPreset } from "@img-src/sdk/funcs/presetsGetPreset.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await presetsGetPreset(imgsrc, "preset_abc123");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("presetsGetPreset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.GetPresetResponse](../../models/operations/getpresetresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 401, 403, 404             | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |

## updatePreset

Updates an existing preset. Requires Pro plan.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updatePreset" method="put" path="/api/v1/settings/presets/{id}" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.presets.updatePreset("preset_abc123", {
    name: "card-image",
    description: "Card thumbnail for product listings",
    params: {
      "w": 400,
      "h": 300,
      "fit": "cover",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { presetsUpdatePreset } from "@img-src/sdk/funcs/presetsUpdatePreset.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await presetsUpdatePreset(imgsrc, "preset_abc123", {
    name: "card-image",
    description: "Card thumbnail for product listings",
    params: {
      "w": 400,
      "h": 300,
      "fit": "cover",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("presetsUpdatePreset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `body`                                                                                                                                                                         | [components.UpdatePresetRequest](../../models/components/updatepresetrequest.md)                                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.UpdatePresetResponse](../../models/operations/updatepresetresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 401, 403, 404, 409   | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |

## deletePreset

Deletes a preset. Requires Pro plan.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deletePreset" method="delete" path="/api/v1/settings/presets/{id}" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.presets.deletePreset("preset_abc123");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { presetsDeletePreset } from "@img-src/sdk/funcs/presetsDeletePreset.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await presetsDeletePreset(imgsrc, "preset_abc123");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("presetsDeletePreset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.DeletePresetResponse](../../models/operations/deletepresetresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 401, 403, 404             | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |