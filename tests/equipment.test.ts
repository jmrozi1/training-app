import { describe, expect, it } from "vitest";
import {
  getEffectiveLoad,
  getPerUnitLoad,
  isValidExternalLoad,
} from "../src/domain/equipment";
import { mockProgram } from "../src/mock/mock-program";

describe("equipment helpers", () => {
  it("accepts only loadable barbell totals", () => {
    const equipment =
      mockProgram.exerciseDefinitions["bench-press"]?.equipment;

    expect(equipment).toBeDefined();
    if (!equipment) return;

    expect(isValidExternalLoad(equipment, 45)).toBe(true);
    expect(isValidExternalLoad(equipment, 55)).toBe(true);
    expect(isValidExternalLoad(equipment, 60)).toBe(false);
  });

  it("stores dumbbell weight as total and derives per-hand weight", () => {
    const equipment =
      mockProgram.exerciseDefinitions["dumbbell-fly"]?.equipment;

    expect(equipment).toBeDefined();
    if (!equipment) return;

    expect(isValidExternalLoad(equipment, 50)).toBe(true);
    expect(isValidExternalLoad(equipment, 55)).toBe(false);
    expect(getPerUnitLoad(equipment, 50)).toBe(25);
  });

  it("calculates weighted body-moving effective load", () => {
    const equipment =
      mockProgram.exerciseDefinitions["back-squat"]?.equipment;

    expect(equipment).toBeDefined();
    if (!equipment) return;

    expect(getEffectiveLoad(equipment, 300, 200)).toBe(400);
  });

  it("requires zero external load for pure bodyweight exercises", () => {
    const equipment =
      mockProgram.exerciseDefinitions["pull-up"]?.equipment;

    expect(equipment).toBeDefined();
    if (!equipment) return;

    expect(isValidExternalLoad(equipment, 0)).toBe(true);
    expect(isValidExternalLoad(equipment, 10)).toBe(false);
  });
});
