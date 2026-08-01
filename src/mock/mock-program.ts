import type {
  ExerciseDefinition,
  ExercisePlacement,
  Program,
  ProgramSet,
  SetResultsBySetId,
  TrainingWeek,
  WorkoutDay,
} from "../domain/types";

const exercises: ExerciseDefinition[] = [
  {
    id: "bench-press",
    name: "Bench Press",
    primaryMuscleGroup: "chest",
    secondaryMuscleGroups: ["triceps", "shoulders"],
    equipment: {
      type: "barbell",
      barWeight: 45,
      totalLoadIncrement: 10,
    },
  },
  {
    id: "dumbbell-fly",
    name: "Dumbbell Fly",
    primaryMuscleGroup: "chest",
    secondaryMuscleGroups: ["shoulders"],
    equipment: {
      type: "dumbbells",
      units: 2,
      incrementPerUnit: 5,
      storedWeight: "total",
      displayWeight: "total-and-per-unit",
    },
  },
  {
    id: "pull-up",
    name: "Pull-Up",
    primaryMuscleGroup: "back",
    secondaryMuscleGroups: ["biceps"],
    equipment: {
      type: "bodyweight",
    },
  },
  {
    id: "back-squat",
    name: "Back Squat",
    primaryMuscleGroup: "quadriceps",
    secondaryMuscleGroups: ["glutes", "hamstrings", "core"],
    equipment: {
      type: "weighted-body-movement",
      externalEquipment: {
        type: "barbell",
        barWeight: 45,
        totalLoadIncrement: 10,
      },
      bodyweightContributionFactor: 0.5,
    },
  },
  {
    id: "cable-row",
    name: "Cable Row",
    primaryMuscleGroup: "back",
    secondaryMuscleGroups: ["biceps"],
    equipment: {
      type: "machine",
      totalLoadIncrement: 10,
    },
  },
];

const exerciseDefinitions = Object.fromEntries(
  exercises.map((exercise) => [exercise.id, exercise]),
);

function makeSet(
  week: number,
  day: number,
  placement: string,
  setNumber: number,
  targetWeight: number,
  targetReps: number,
  expectedRir?: number,
): ProgramSet {
  return {
    id: `w${week}-d${day}-${placement}-s${setNumber}`,
    setNumber,
    prescription: {
      targetWeight,
      targetReps,
      ...(expectedRir === undefined ? {} : { expectedRir }),
    },
  };
}

function makePlacement(
  week: number,
  day: number,
  id: string,
  exerciseId: string,
  order: number,
  weight: number,
  reps: number,
  expectedRir: number,
): ExercisePlacement {
  return {
    id: `w${week}-d${day}-${id}`,
    exerciseId,
    order,
    sets: [
      makeSet(week, day, id, 1, weight, reps, expectedRir),
      makeSet(week, day, id, 2, weight, Math.max(1, reps - 1), expectedRir),
    ],
  };
}

function makeWeek(number: 1 | 2 | 3 | 4 | 5): TrainingWeek {
  const benchReps = number === 5 ? 6 : 4 + (number - 1);
  const benchWeight = number === 5 ? 175 : 205;
  const flyReps = number === 5 ? 6 : 8;
  const flyWeight = number === 5 ? 100 : 120;
  const squatWeight = number === 5 ? 235 : 300;
  const squatReps = number === 5 ? 6 : 5 + (number - 1);
  const pullupReps = number === 5 ? 6 : 10 + (number - 1);

  const day1: WorkoutDay = {
    id: `w${number}-day-1`,
    name: "Upper A",
    order: 1,
    exercises: [
      makePlacement(
        number,
        1,
        "bench",
        "bench-press",
        1,
        benchWeight,
        benchReps,
        number === 4 ? 0 : 4 - number,
      ),
      makePlacement(
        number,
        1,
        "fly",
        "dumbbell-fly",
        2,
        flyWeight,
        flyReps,
        1,
      ),
      makePlacement(
        number,
        1,
        "pullup",
        "pull-up",
        3,
        0,
        pullupReps,
        number === 5 ? 4 : 2,
      ),
      makePlacement(
        number,
        1,
        "row",
        "cable-row",
        4,
        number === 5 ? 100 : 120,
        number === 5 ? 8 : 10,
        1,
      ),
    ],
  };

  const day2: WorkoutDay = {
    id: `w${number}-day-2`,
    name: "Lower A",
    order: 2,
    exercises: [
      makePlacement(
        number,
        2,
        "squat",
        "back-squat",
        1,
        squatWeight,
        squatReps,
        number === 4 ? 0 : 4 - number,
      ),
    ],
  };

  return {
    id: `week-${number}`,
    number,
    days: [day1, day2],
  };
}

export const mockProgram: Program = {
  id: "personal-training-program",
  name: "Personal Training Program",
  exerciseDefinitions,
  blocks: [
    {
      id: "block-1",
      sequence: 1,
      name: "Block 1",
      weeks: [1, 2, 3, 4, 5].map((week) =>
        makeWeek(week as 1 | 2 | 3 | 4 | 5),
      ),
    },
  ],
};

export const mockResults: SetResultsBySetId = {
  "w1-d1-bench-s1": {
    status: "completed",
    actualWeight: 205,
    actualReps: 4,
    completedAt: "2026-07-01T18:00:00.000Z",
  },
  "w1-d1-bench-s2": {
    status: "completed",
    actualWeight: 205,
    actualReps: 2,
    completedAt: "2026-07-01T18:04:00.000Z",
    note: "Below target after a poor night of sleep.",
  },
  "w1-d1-fly-s1": {
    status: "completed",
    actualWeight: 120,
    actualReps: 9,
    completedAt: "2026-07-01T18:10:00.000Z",
    updatedAt: "2026-07-01T18:12:00.000Z",
  },
  "w1-d1-fly-s2": {
    status: "skipped",
    completedAt: "2026-07-01T18:14:00.000Z",
    note: "Shoulder felt irritated.",
  },
};
