import type { WorkoutLocation } from "../domain/types";

export type MockScenarioId =
  | "unlogged"
  | "completed-target"
  | "completed-below-target"
  | "completed-above-target"
  | "skipped"
  | "edited-result"
  | "barbell"
  | "dumbbells"
  | "bodyweight"
  | "weighted-body-movement"
  | "later-same-muscle-group"
  | "week-five-deload"
  | "first-set"
  | "middle-set"
  | "final-set"
  | "workout-boundary";

export type MockScenario = {
  id: MockScenarioId;
  label: string;
  description: string;
  location: WorkoutLocation;
};

/**
 * Stable entry points for Issue #3 UI development.
 *
 * These scenarios keep the UI from depending on knowledge of fixture internals
 * such as set IDs or array positions scattered throughout component code.
 */
export const mockScenarios: Record<MockScenarioId, MockScenario> = {
  unlogged: {
    id: "unlogged",
    label: "Unlogged set",
    description: "A set with a prescription but no recorded result.",
    location: {
      blockIndex: 0,
      weekIndex: 1,
      dayIndex: 0,
      exerciseIndex: 0,
      setIndex: 0,
    },
  },
  "completed-target": {
    id: "completed-target",
    label: "Target completed",
    description: "A completed set matching the prescribed reps.",
    location: {
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 0,
      exerciseIndex: 0,
      setIndex: 0,
    },
  },
  "completed-below-target": {
    id: "completed-below-target",
    label: "Below target",
    description: "A completed set with fewer reps than prescribed.",
    location: {
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 0,
      exerciseIndex: 0,
      setIndex: 1,
    },
  },
  "completed-above-target": {
    id: "completed-above-target",
    label: "Above target",
    description: "A completed set with more reps than prescribed.",
    location: {
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 0,
      exerciseIndex: 1,
      setIndex: 0,
    },
  },
  skipped: {
    id: "skipped",
    label: "Skipped set",
    description: "A set explicitly recorded as skipped.",
    location: {
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 0,
      exerciseIndex: 1,
      setIndex: 1,
    },
  },
  "edited-result": {
    id: "edited-result",
    label: "Edited result",
    description: "A completed result with an updatedAt timestamp.",
    location: {
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 0,
      exerciseIndex: 1,
      setIndex: 0,
    },
  },
  barbell: {
    id: "barbell",
    label: "Barbell exercise",
    description: "Bench press using a 45 lb bar and 10 lb total increments.",
    location: {
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 0,
      exerciseIndex: 0,
      setIndex: 0,
    },
  },
  dumbbells: {
    id: "dumbbells",
    label: "Dumbbell exercise",
    description: "Total load stored with a per-hand display value.",
    location: {
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 0,
      exerciseIndex: 1,
      setIndex: 0,
    },
  },
  bodyweight: {
    id: "bodyweight",
    label: "Bodyweight exercise",
    description: "Pull-up with zero external load.",
    location: {
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 0,
      exerciseIndex: 2,
      setIndex: 0,
    },
  },
  "weighted-body-movement": {
    id: "weighted-body-movement",
    label: "Weighted body-moving exercise",
    description: "Back squat using external load plus a bodyweight factor.",
    location: {
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 1,
      exerciseIndex: 0,
      setIndex: 0,
    },
  },
  "later-same-muscle-group": {
    id: "later-same-muscle-group",
    label: "Later same-group exercise",
    description: "Dumbbell fly after bench press for the same primary group.",
    location: {
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 0,
      exerciseIndex: 1,
      setIndex: 0,
    },
  },
  "week-five-deload": {
    id: "week-five-deload",
    label: "Week-five deload",
    description: "A deload prescription with reduced weight and reps.",
    location: {
      blockIndex: 0,
      weekIndex: 4,
      dayIndex: 0,
      exerciseIndex: 0,
      setIndex: 0,
    },
  },
  "first-set": {
    id: "first-set",
    label: "First set",
    description: "The first set in a workout day.",
    location: {
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 0,
      exerciseIndex: 0,
      setIndex: 0,
    },
  },
  "middle-set": {
    id: "middle-set",
    label: "Middle set",
    description: "A set that has valid previous and next locations.",
    location: {
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 0,
      exerciseIndex: 1,
      setIndex: 0,
    },
  },
  "final-set": {
    id: "final-set",
    label: "Final set",
    description: "The final prescribed set in the full mock program.",
    location: {
      blockIndex: 1,
      weekIndex: 4,
      dayIndex: 1,
      exerciseIndex: 0,
      setIndex: 1,
    },
  },
  "workout-boundary": {
    id: "workout-boundary",
    label: "Workout boundary",
    description: "The final set before navigation advances to the next day.",
    location: {
      blockIndex: 0,
      weekIndex: 0,
      dayIndex: 0,
      exerciseIndex: 3,
      setIndex: 1,
    },
  },
};
