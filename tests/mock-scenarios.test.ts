import { describe, expect, it } from "vitest";
import { getPerUnitLoad } from "../src/domain/equipment";
import { mockResults } from "../src/mock/mock-program";
import { resolveMockScenario } from "../src/mock/mock-scenario-resolution";
import {
  mockScenarios,
  type MockScenarioId,
} from "../src/mock/mock-scenarios";
import {
  getNextWorkoutLocation,
  getPreviousWorkoutLocation,
} from "../src/navigation/workout-navigation";
import { mockProgram } from "../src/mock/mock-program";

describe("mock UI scenarios", () => {
  it("resolves every declared scenario", () => {
    for (const scenario of Object.values(mockScenarios)) {
      expect(() => resolveMockScenario(scenario.id)).not.toThrow();
    }
  });

  it("covers unlogged, completed, missed, exceeded, skipped, and edited states", () => {
    expect(resolveMockScenario("unlogged").result).toBeUndefined();

    expect(resolveMockScenario("completed-target")).toMatchObject({
      set: { prescription: { targetReps: 4 } },
      result: { status: "completed", actualReps: 4 },
    });

    expect(resolveMockScenario("completed-below-target")).toMatchObject({
      set: { prescription: { targetReps: 3 } },
      result: { status: "completed", actualReps: 2 },
    });

    expect(resolveMockScenario("completed-above-target")).toMatchObject({
      set: { prescription: { targetReps: 8 } },
      result: { status: "completed", actualReps: 9 },
    });

    expect(resolveMockScenario("skipped").result).toMatchObject({
      status: "skipped",
    });

    expect(resolveMockScenario("edited-result").result).toMatchObject({
      updatedAt: "2026-07-01T18:12:00.000Z",
    });
  });

  it("covers all required equipment contexts", () => {
    expect(resolveMockScenario("barbell").exercise.equipment.type).toBe(
      "barbell",
    );

    const dumbbell = resolveMockScenario("dumbbells");
    expect(dumbbell.exercise.equipment.type).toBe("dumbbells");
    expect(
      getPerUnitLoad(
        dumbbell.exercise.equipment,
        dumbbell.set.prescription.targetWeight,
      ),
    ).toBe(60);

    expect(resolveMockScenario("bodyweight")).toMatchObject({
      exercise: { equipment: { type: "bodyweight" } },
      set: { prescription: { targetWeight: 0 } },
    });

    expect(
      resolveMockScenario("weighted-body-movement").exercise.equipment.type,
    ).toBe("weighted-body-movement");
  });

  it("identifies later same-muscle-group and deload contexts", () => {
    expect(resolveMockScenario("later-same-muscle-group")).toMatchObject({
      exercise: {
        name: "Dumbbell Fly",
        primaryMuscleGroup: "chest",
      },
      placement: { order: 2 },
    });

    expect(resolveMockScenario("week-five-deload")).toMatchObject({
      week: { number: 5 },
      set: {
        prescription: {
          targetWeight: 175,
          targetReps: 6,
        },
      },
    });
  });

  it("provides navigable first, middle, final, and workout-boundary states", () => {
    const first = mockScenarios["first-set"].location;
    const middle = mockScenarios["middle-set"].location;
    const final = mockScenarios["final-set"].location;
    const boundary = mockScenarios["workout-boundary"].location;

    expect(getPreviousWorkoutLocation(mockProgram, first)).toBeUndefined();

    expect(getPreviousWorkoutLocation(mockProgram, middle)).toBeDefined();
    expect(getNextWorkoutLocation(mockProgram, middle)).toBeDefined();

    expect(getNextWorkoutLocation(mockProgram, final)).toBeUndefined();

    expect(getNextWorkoutLocation(mockProgram, boundary)).toEqual({
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 1,
      exerciseIndex: 0,
      setIndex: 0,
    });
  });

  it("does not duplicate scenario IDs", () => {
    const ids = Object.keys(mockScenarios) as MockScenarioId[];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("keeps results replaceable without mutating prescriptions", () => {
    const original = resolveMockScenario("completed-target");
    const replacementResults = {
      ...mockResults,
      [original.set.id]: {
        status: "completed" as const,
        actualWeight: 205,
        actualReps: 5,
        completedAt: "2026-07-01T18:00:00.000Z",
        updatedAt: "2026-07-01T19:00:00.000Z",
      },
    };

    const replaced = resolveMockScenario(
      "completed-target",
      replacementResults,
    );

    expect(replaced.result).toMatchObject({
      actualReps: 5,
      updatedAt: "2026-07-01T19:00:00.000Z",
    });
    expect(replaced.set.prescription.targetReps).toBe(4);
  });
});
