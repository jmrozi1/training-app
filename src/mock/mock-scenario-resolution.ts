import type {
  ResolvedWorkoutLocation,
  SetResultsBySetId,
} from "../domain/types";
import { resolveWorkoutLocation } from "../navigation/workout-navigation";
import { mockProgram, mockResults } from "./mock-program";
import {
  mockScenarios,
  type MockScenarioId,
} from "./mock-scenarios";

export function resolveMockScenario(
  scenarioId: MockScenarioId,
  results: SetResultsBySetId = mockResults,
): ResolvedWorkoutLocation {
  const scenario = mockScenarios[scenarioId];
  const resolved = resolveWorkoutLocation(
    mockProgram,
    scenario.location,
    results,
  );

  if (!resolved) {
    throw new Error(
      `Mock scenario "${scenarioId}" points to an invalid workout location.`,
    );
  }

  return resolved;
}
