# Settings

## Overview

### Available Operations

* [getSettings](#getsettings) - Get user settings
* [updateSettings](#updatesettings) - Update user settings

## getSettings

Returns the authenticated user's settings

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSettings" method="get" path="/api/v1/settings" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.settings.getSettings();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { settingsGetSettings } from "@img-src/sdk/funcs/settingsGetSettings.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await settingsGetSettings(imgsrc);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settingsGetSettings failed:", res.error);
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

**Promise\<[operations.GetSettingsResponse](../../models/operations/getsettingsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 401                       | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |

## updateSettings

Updates the authenticated user's settings

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateSettings" method="put" path="/api/v1/settings" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.settings.updateSettings({
    deliveryFormats: [
      "webp",
      "avif",
      "jpeg",
    ],
    defaultQuality: 80,
    defaultFitMode: "contain",
    defaultMaxWidth: 1920,
    defaultMaxHeight: 1080,
    theme: "dark",
    language: "ko",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { settingsUpdateSettings } from "@img-src/sdk/funcs/settingsUpdateSettings.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await settingsUpdateSettings(imgsrc, {
    deliveryFormats: [
      "webp",
      "avif",
      "jpeg",
    ],
    defaultQuality: 80,
    defaultFitMode: "contain",
    defaultMaxWidth: 1920,
    defaultMaxHeight: 1080,
    theme: "dark",
    language: "ko",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settingsUpdateSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.UpdateSettingsRequest](../../models/components/updatesettingsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateSettingsResponse](../../models/operations/updatesettingsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 401, 404             | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |