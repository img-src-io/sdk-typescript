import { describe, it, expect } from "vitest";
import {
  Visibility,
  Visibility$inboundSchema,
  Visibility$outboundSchema,
} from "../../src/models/components/visibility.js";

describe("Visibility", () => {
  it("parses 'public'", () => {
    const result = Visibility$inboundSchema.parse("public");
    expect(result).toBe("public");
  });

  it("parses 'private'", () => {
    const result = Visibility$inboundSchema.parse("private");
    expect(result).toBe("private");
  });

  it("rejects invalid values", () => {
    expect(() => Visibility$inboundSchema.parse("unlisted")).toThrow();
  });

  it("serializes via outbound schema", () => {
    expect(Visibility$outboundSchema.parse("public")).toBe("public");
    expect(Visibility$outboundSchema.parse("private")).toBe("private");
  });

  it("has correct enum values", () => {
    expect(Visibility.Public).toBe("public");
    expect(Visibility.Private).toBe("private");
  });
});
