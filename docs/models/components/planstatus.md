# PlanStatus

Current plan status

## Example Usage

```typescript
import { PlanStatus } from "@img-src/sdk/models/components";

let value: PlanStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "cancelling" | "expired" | Unrecognized<string>
```