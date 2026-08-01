export type Id = string;

export type MuscleGroup =
  | "chest"
  | "back"
  | "shoulders"
  | "quadriceps"
  | "hamstrings"
  | "glutes"
  | "biceps"
  | "triceps"
  | "calves"
  | "core";

export type BarbellEquipment = {
  type: "barbell";
  barWeight: number;
  totalLoadIncrement: number;
};

export type DumbbellEquipment = {
  type: "dumbbells";
  units: number;
  incrementPerUnit: number;
  storedWeight: "total";
  displayWeight: "total-and-per-unit";
};

export type MachineEquipment = {
  type: "machine";
  totalLoadIncrement: number;
};

export type BodyweightEquipment = {
  type: "bodyweight";
};

export type WeightedBodyMovementEquipment = {
  type: "weighted-body-movement";
  externalEquipment:
    | BarbellEquipment
    | DumbbellEquipment
    | MachineEquipment;
  bodyweightContributionFactor: number;
};

export type EquipmentConfig =
  | BarbellEquipment
  | DumbbellEquipment
  | MachineEquipment
  | BodyweightEquipment
  | WeightedBodyMovementEquipment;

export type ExerciseDefinition = {
  id: Id;
  name: string;
  primaryMuscleGroup: MuscleGroup;
  secondaryMuscleGroups: MuscleGroup[];
  equipment: EquipmentConfig;
};

export type SetPrescription = {
  /**
   * Total external load.
   *
   * For two dumbbells, 25 lb per hand is stored as 50 lb.
   * For pure bodyweight exercises, this is zero.
   */
  targetWeight: number;
  targetReps: number;
  expectedRir?: number;
};

export type ProgramSet = {
  id: Id;
  setNumber: number;
  prescription: SetPrescription;
};

export type ExercisePlacement = {
  id: Id;
  exerciseId: Id;
  order: number;
  sets: ProgramSet[];
};

export type WorkoutDay = {
  id: Id;
  name: string;
  order: number;
  exercises: ExercisePlacement[];
};

export type TrainingWeek = {
  id: Id;
  number: 1 | 2 | 3 | 4 | 5;
  days: WorkoutDay[];
};

export type TrainingBlock = {
  id: Id;
  sequence: number;
  name: string;
  weeks: TrainingWeek[];
};

export type Program = {
  id: Id;
  name: string;
  exerciseDefinitions: Record<Id, ExerciseDefinition>;
  blocks: TrainingBlock[];
};

export type CompletedSetResult = {
  status: "completed";
  actualWeight: number;
  actualReps: number;
  completedAt: string;
  updatedAt?: string;
  note?: string;
};

export type SkippedSetResult = {
  status: "skipped";
  completedAt: string;
  updatedAt?: string;
  note?: string;
};

export type SetResult = CompletedSetResult | SkippedSetResult;

export type SetResultsBySetId = Record<Id, SetResult>;

export type WorkoutLocation = {
  blockIndex: number;
  weekIndex: number;
  dayIndex: number;
  exerciseIndex: number;
  setIndex: number;
};

export type ResolvedWorkoutLocation = {
  location: WorkoutLocation;
  block: TrainingBlock;
  week: TrainingWeek;
  day: WorkoutDay;
  placement: ExercisePlacement;
  exercise: ExerciseDefinition;
  set: ProgramSet;
  result?: SetResult;
};
