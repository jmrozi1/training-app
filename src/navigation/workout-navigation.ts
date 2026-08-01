import type {
  Program,
  ResolvedWorkoutLocation,
  SetResultsBySetId,
  WorkoutLocation,
} from "../domain/types";

function getAt<T>(items: readonly T[], index: number): T | undefined {
  return index >= 0 ? items[index] : undefined;
}

export function resolveWorkoutLocation(
  program: Program,
  location: WorkoutLocation,
  results: SetResultsBySetId = {},
): ResolvedWorkoutLocation | undefined {
  const block = getAt(program.blocks, location.blockIndex);
  const week = block && getAt(block.weeks, location.weekIndex);
  const day = week && getAt(week.days, location.dayIndex);
  const placement = day && getAt(day.exercises, location.exerciseIndex);
  const set = placement && getAt(placement.sets, location.setIndex);
  const exercise =
    placement && program.exerciseDefinitions[placement.exerciseId];

  if (!block || !week || !day || !placement || !set || !exercise) {
    return undefined;
  }

  const result = results[set.id];

  return {
    location,
    block,
    week,
    day,
    placement,
    exercise,
    set,
    ...(result ? { result } : {}),
  };
}

export function enumerateWorkoutLocations(
  program: Program,
): WorkoutLocation[] {
  const locations: WorkoutLocation[] = [];

  program.blocks.forEach((block, blockIndex) => {
    block.weeks.forEach((week, weekIndex) => {
      week.days.forEach((day, dayIndex) => {
        day.exercises.forEach((placement, exerciseIndex) => {
          placement.sets.forEach((_set, setIndex) => {
            locations.push({
              blockIndex,
              weekIndex,
              dayIndex,
              exerciseIndex,
              setIndex,
            });
          });
        });
      });
    });
  });

  return locations;
}

function locationEquals(
  left: WorkoutLocation,
  right: WorkoutLocation,
): boolean {
  return (
    left.blockIndex === right.blockIndex &&
    left.weekIndex === right.weekIndex &&
    left.dayIndex === right.dayIndex &&
    left.exerciseIndex === right.exerciseIndex &&
    left.setIndex === right.setIndex
  );
}

export function getNextWorkoutLocation(
  program: Program,
  current: WorkoutLocation,
): WorkoutLocation | undefined {
  const locations = enumerateWorkoutLocations(program);
  const index = locations.findIndex((location) =>
    locationEquals(location, current),
  );

  return index >= 0 ? locations[index + 1] : undefined;
}

export function getPreviousWorkoutLocation(
  program: Program,
  current: WorkoutLocation,
): WorkoutLocation | undefined {
  const locations = enumerateWorkoutLocations(program);
  const index = locations.findIndex((location) =>
    locationEquals(location, current),
  );

  return index > 0 ? locations[index - 1] : undefined;
}

export function getPrimaryMuscleGroupPosition(
  program: Program,
  location: WorkoutLocation,
): number | undefined {
  const resolved = resolveWorkoutLocation(program, location);
  if (!resolved) {
    return undefined;
  }

  const currentGroup = resolved.exercise.primaryMuscleGroup;
  let position = 0;

  for (let index = 0; index <= location.exerciseIndex; index += 1) {
    const placement = resolved.day.exercises[index];
    if (!placement) {
      return undefined;
    }

    const definition =
      program.exerciseDefinitions[placement.exerciseId];

    if (definition?.primaryMuscleGroup === currentGroup) {
      position += 1;
    }
  }

  return position;
}
