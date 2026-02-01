# @img-src/sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *@img-src/sdk* API.

[![NPM Version](https://img.shields.io/npm/v/%40img-src%2Fsdk?style=for-the-badge&color=3b5bdb&labelColor=eff6ff)](https://www.npmjs.com/package/@img-src/sdk)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)

<br /><br />

<!-- Start Summary [summary] -->
## Summary

img-src API: Image processing and delivery API.

A serverless image processing and delivery API built on Cloudflare Workers with parameter-driven image transformation and on-demand transcoding.

## Features

- **Image Upload**: Store original images in R2 with SHA256-based deduplication
- **On-Demand Transformation**: Resize, crop, and convert images via URL parameters
- **Format Conversion**: WebP, AVIF, JPEG, PNG output formats
- **Path Organization**: Organize images into folders with multiple paths per image
- **CDN Caching**: Automatic edge caching for transformed images

## Authentication

Authenticate using API Keys with `imgsrc_` prefix. Create your API key at https://img-src.io/settings

## Rate Limiting

- **Free Plan**: 100 requests/minute
- **Pro Plan**: 500 requests/minute

Rate limit headers are included in all responses.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@img-src/sdk](#img-srcsdk)
  * [Features](#features)
  * [Authentication](#authentication)
  * [Rate Limiting](#rate-limiting)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication-1)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @img-src/sdk
```

### PNPM

```bash
pnpm add @img-src/sdk
```

### Bun

```bash
bun add @img-src/sdk
```

### Yarn

```bash
yarn add @img-src/sdk
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Upload and Transform Images

```typescript
import { Imgsrc } from "@img-src/sdk";
import { openAsBlob } from "node:fs";

// Create API key at https://img-src.io/settings
const client = new Imgsrc({
  bearerAuth: process.env["IMGSRC_API_KEY"],
});

async function main() {
  // Upload an image
  const file = await openAsBlob("./photo.jpg");
  const uploaded = await client.images.uploadImage({
    file,
    targetPath: "photos/2024",
  });
  console.log("Uploaded:", uploaded.url);

  // Access with transformations via CDN
  // https://img-src.io/i/{username}/photos/2024/photo.webp?w=800&h=600&fit=cover&q=85

  // List images
  const images = await client.images.listImages({ limit: 20 });
  console.log(`Total: ${images.total} images`);
}

main();
```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      |
| ------------ | ---- | ----------- |
| `bearerAuth` | http | HTTP Bearer |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance.

Create your API key at [https://img-src.io/settings](https://img-src.io/settings).

```typescript
import { Imgsrc } from "@img-src/sdk";

const client = new Imgsrc({
  bearerAuth: process.env["IMGSRC_API_KEY"],
});

async function main() {
  const images = await client.images.listImages({ limit: 10 });
  console.log(images);
}

main();
```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Images](docs/sdks/images/README.md)

* [uploadImage](docs/sdks/images/README.md#uploadimage) - Upload image
* [listImages](docs/sdks/images/README.md#listimages) - List images
* [searchImages](docs/sdks/images/README.md#searchimages) - Search images
* [getImage](docs/sdks/images/README.md#getimage) - Get image metadata
* [deleteImage](docs/sdks/images/README.md#deleteimage) - Delete image
* [createSignedUrl](docs/sdks/images/README.md#createsignedurl) - Create signed URL
* [deleteImagePath](docs/sdks/images/README.md#deleteimagepath) - Delete image path

### [Presets](docs/sdks/presets/README.md)

* [listPresets](docs/sdks/presets/README.md#listpresets) - List presets
* [createPreset](docs/sdks/presets/README.md#createpreset) - Create preset
* [getPreset](docs/sdks/presets/README.md#getpreset) - Get preset
* [updatePreset](docs/sdks/presets/README.md#updatepreset) - Update preset
* [deletePreset](docs/sdks/presets/README.md#deletepreset) - Delete preset

### [Settings](docs/sdks/settings/README.md)

* [getSettings](docs/sdks/settings/README.md#getsettings) - Get user settings
* [updateSettings](docs/sdks/settings/README.md#updatesettings) - Update user settings

### [Usage](docs/sdks/usage/README.md)

* [getUsage](docs/sdks/usage/README.md#getusage) - Get usage statistics

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`imagesCreateSignedUrl`](docs/sdks/images/README.md#createsignedurl) - Create signed URL
- [`imagesDeleteImage`](docs/sdks/images/README.md#deleteimage) - Delete image
- [`imagesDeleteImagePath`](docs/sdks/images/README.md#deleteimagepath) - Delete image path
- [`imagesGetImage`](docs/sdks/images/README.md#getimage) - Get image metadata
- [`imagesListImages`](docs/sdks/images/README.md#listimages) - List images
- [`imagesSearchImages`](docs/sdks/images/README.md#searchimages) - Search images
- [`imagesUploadImage`](docs/sdks/images/README.md#uploadimage) - Upload image
- [`presetsCreatePreset`](docs/sdks/presets/README.md#createpreset) - Create preset
- [`presetsDeletePreset`](docs/sdks/presets/README.md#deletepreset) - Delete preset
- [`presetsGetPreset`](docs/sdks/presets/README.md#getpreset) - Get preset
- [`presetsListPresets`](docs/sdks/presets/README.md#listpresets) - List presets
- [`presetsUpdatePreset`](docs/sdks/presets/README.md#updatepreset) - Update preset
- [`settingsGetSettings`](docs/sdks/settings/README.md#getsettings) - Get user settings
- [`settingsUpdateSettings`](docs/sdks/settings/README.md#updatesettings) - Update user settings
- [`usageGetUsage`](docs/sdks/usage/README.md#getusage) - Get usage statistics

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: process.env["IMGSRC_API_KEY"],
});

async function run() {
  const result = await imgsrc.images.listImages(50, 0, "blog/2024");

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: process.env["IMGSRC_API_KEY"],
});

async function run() {
  const result = await imgsrc.images.uploadImage({
    targetPath: "blog/2024",
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: process.env["IMGSRC_API_KEY"],
});

async function run() {
  const result = await imgsrc.settings.getSettings({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: process.env["IMGSRC_API_KEY"],
});

async function run() {
  const result = await imgsrc.settings.getSettings();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`ImgsrcError`](./src/models/errors/imgsrcerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property                  | Type       | Description                                                                             |
| ------------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`           | `string`   | Error message                                                                           |
| `error.httpMeta.response` | `Response` | HTTP response. Access to headers and more.                                              |
| `error.httpMeta.request`  | `Request`  | HTTP request. Access to headers and more.                                               |
| `error.data$`             |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Imgsrc } from "@img-src/sdk";
import * as errors from "@img-src/sdk/models/errors";

const imgsrc = new Imgsrc({
  bearerAuth: process.env["IMGSRC_API_KEY"],
});

async function run() {
  try {
    const result = await imgsrc.settings.getSettings();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.ImgsrcError) {
      console.log(error.message);
      console.log(error.httpMeta.response.status);
      console.log(error.httpMeta.response.headers);
      console.log(error.httpMeta.request);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorResponse) {
        console.log(error.data$.error); // components.ErrorDetail
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`ImgsrcError`](./src/models/errors/imgsrcerror.ts): The base class for HTTP error responses.
  * [`ErrorResponse`](./src/models/errors/errorresponse.ts): Generic error.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.

**Inherit from [`ImgsrcError`](./src/models/errors/imgsrcerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  serverURL: "https://api.img-src.io",
  bearerAuth: process.env["IMGSRC_API_KEY"],
});

async function run() {
  const result = await imgsrc.settings.getSettings();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Imgsrc } from "@img-src/sdk";
import { HTTPClient } from "@img-src/sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Imgsrc({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Imgsrc } from "@img-src/sdk";

const sdk = new Imgsrc({ debugLogger: console });
```
<!-- End Debugging [debug] -->
