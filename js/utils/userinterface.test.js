import { describe, expect, it } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  it("Returns true when current path matches href exactly", () => {
    expect(isActivePath("/login", "/login")).toBe(true);
  });

  it("Returns true for root path / when path is / or /index.html", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("Returns true when current path includes href", () => {
    expect(isActivePath("/venue", "/venue/?id=")).toBe(true);
    expect(isActivePath("/login", "/login/index.html")).toBe(true);
  });
  it("Returns false when current path does not match or include href", () => {
    expect(isActivePath("/about", "/contact")).toBe(false);
    expect(isActivePath("/home", "/about")).toBe(false);
  });
});
