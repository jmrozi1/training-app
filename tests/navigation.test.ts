import { describe, expect, it } from "vitest";
import {
  enumerateWorkoutLocations,
  getNextWorkoutLocation,
  getPreviousWorkoutLocation,
  getPrimaryMuscleGroupPosition,
  resolveWorkoutLocation,
} from "../src/navigation/workout-navigation";
import { mockProgram, mockResults } from "../src/mock/mock-program";

describe("workout navigation", () => {
  it("resolves prescriptions and separate results", () => {
    const resolved = resolveWorkoutLocation(
      mockProgram,
      {
        blockIndex: 0,
        weekIndex: 0,
        dayIndex: 0,
        exerciseIndex: 0,
        setIndex: 0,
      },
      mockResults,
    );

    expect(resolved?.exercise.name).toBe("Bench Press");
    expect(resolved?.set.prescription.targetReps).toBe(4);
    expect(resolved?.result).toMatchObject({
      status: "completed",
      actualReps: 4,
    });
  });

  it("navigates across an exercise boundary", () => {
    const current = {
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 0,
      exerciseIndex: 0,
      setIndex: 1,
    };

    expect(getNextWorkoutLocation(mockProgram, current)).toEqual({
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 0,
      exerciseIndex: 1,
      setIndex: 0,
    });
  });

  it("navigates across a day boundary", () => {
    const locations = enumerateWorkoutLocations(mockProgram);
    const lastUpperSet = [...locations]
      .reverse()
      .find((location) => location.weekIndex === 0 && location.dayIndex === 0);

    expect(lastUpperSet).toBeDefined();
    if (!lastUpperSet) return;

    expect(getNextWorkoutLocation(mockProgram, lastUpperSet)).toEqual({
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 1,
      exerciseIndex: 0,
      setIndex: 0,
    });
  });

  it("does not wrap before the first or after the final set", () => {
    const locations = enumerateWorkoutLocations(mockProgram);
    const first = locations[0];
    const last = locations.at(-1);

    expect(first).toBeDefined();
    expect(last).toBeDefined();
    if (!first || !last) return;

    expect(getPreviousWorkoutLocation(mockProgram, first)).toBeUndefined();
    expect(getNextWorkoutLocation(mockProgram, last)).toBeUndefined();
  });

  it("identifies first and second exercises for the same muscle group", () => {
    expect(
      getPrimaryMuscleGroupPosition(mockProgram, {
        blockIndex: 0,
        weekIndex: 0,
        dayIndex: 0,
        exerciseIndex: 0,
        setIndex: 0,
      }),
    ).toBe(1);

    expect(
      getPrimaryMuscleGroupPosition(mockProgram, {
        blockIndex: 0,
        weekIndex: 0,
        dayIndex: 0,
        exerciseIndex: 1,
        setIndex: 0,
      }),
    ).toBe(2);
  });

  it("returns undefined for invalid locations", () => {
    expect(
      resolveWorkoutLocation(mockProgram, {
        blockIndex: 99,
        weekIndex: 0,
        dayIndex: 0,
        exerciseIndex: 0,
        setIndex: 0,
      }),
    ).toBeUndefined();
  });
});
