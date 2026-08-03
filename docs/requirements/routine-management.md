# Routine Management Requirements

Status: Draft

## Purpose

Define the minimum requirements for creating and editing reusable workout routines while relying on sensible defaults and keeping advanced configuration out of the primary workflow.

Guided AI planning is intentionally outside the scope of this document.

## 1. Routine Creation

### RTN-CRT-001 — Create a routine

The user shall be able to create a new routine.

### RTN-CRT-002 — Routine name

The user shall provide a name for the routine.

### RTN-CRT-003 — Workout days per week

The user shall specify the number of workout days in the routine.

Workout days shall be represented as ordered routine days such as Day 1, Day 2, and Day 3 rather than requiring assignment to calendar weekdays.

### RTN-CRT-004 — Default-first creation

The user shall be able to create a usable routine without configuring advanced training values.

The application shall supply sensible plan defaults when no override is provided.

## 2. Routine Contents

### RTN-CNT-001 — Add exercises

The user shall be able to add exercises to a workout day.

### RTN-CNT-002 — Add circuits

The user shall be able to add circuits to a workout day.

### RTN-CNT-003 — Remove items

The user shall be able to remove exercises and circuits from a workout day.

### RTN-CNT-004 — Reorder items

The user shall be able to reorder exercises and circuits within a workout day.

### RTN-CNT-005 — Navigate routine days

The user shall be able to navigate among the routine's workout days while editing the routine.

## 3. Exercise Library

### RTN-LIB-001 — Built-in exercise library

The application shall include a small library of commonly used exercises.

### RTN-LIB-002 — Search exercises

The user shall be able to search the exercise library when adding an exercise to a workout day or circuit.

### RTN-LIB-003 — Select an existing exercise

The user shall be able to add a selected exercise without entering routine-specific targets or progression values.

### RTN-LIB-004 — Create a new exercise

When an appropriate exercise does not exist, the user shall be able to create one from the exercise-selection workflow.

### RTN-LIB-005 — Minimal exercise definition

Creating an exercise shall initially require only:

- a name; and
- whether the exercise is weighted or unweighted.

Other exercise configuration shall not be required in the primary creation workflow.

### RTN-LIB-006 — Searchability of user-created exercises

A user-created exercise shall become searchable and reusable after it is created.

## 4. Plan Defaults and Overrides

### RTN-DEF-001 — Application defaults

The application shall provide default training settings sufficient to make a newly created routine usable without additional configuration.

### RTN-DEF-002 — Default rep range

The application shall provide a default rep range for the plan, initially expected to be `5–8` unless changed during later refinement.

### RTN-DEF-003 — Plan-level advanced settings

The user shall be able to open an advanced settings area for the routine and override supported application defaults for that plan.

Advanced settings shall not be displayed as part of the normal routine-creation flow.

### RTN-DEF-004 — Exercise-level advanced settings

The user shall be able to open an advanced settings area for an exercise within the routine and override supported plan defaults for that exercise.

### RTN-DEF-005 — Configuration precedence

When an exercise-level override exists, it shall take precedence over the plan-level value.

When no exercise-level override exists, the plan-level value shall apply.

When no plan-level override exists, the application default shall apply.

### RTN-DEF-006 — No target entry during routine construction

Adding an exercise to a routine shall not require the user to enter starting weight, starting repetitions, current targets, proven maximums, or progression history.

Those values shall be established or generated through workout execution and target-generation behavior.

## 5. Circuits

### RTN-CIR-001 — Create a circuit

The user shall be able to create a circuit within a workout day.

### RTN-CIR-002 — Add circuit exercises

The user shall be able to search for and add exercises to a circuit.

### RTN-CIR-003 — Remove circuit exercises

The user shall be able to remove exercises from a circuit.

### RTN-CIR-004 — Reorder circuit exercises

The user shall be able to reorder exercises within a circuit.

## 6. Scope Boundary

### RTN-SCP-001 — Guided planning excluded

Conversational AI plan creation, equipment-photo analysis, and temporary routine adaptation for unfamiliar gyms or travel environments shall be defined in a separate guided-planning requirements document.

### RTN-SCP-002 — Keep primary interactions minimal

The primary routine-management workflow shall request only information necessary to create and organize the routine.

Optional configuration shall remain behind deliberate advanced interactions.

## 7. Open Questions

The following details remain intentionally unresolved:

- the exact set of application defaults exposed at plan and exercise levels;
- whether the initial default rep range remains `5–8`;
- the exact built-in exercise library;
- the interaction for creating and editing circuits;
- whether routine days may be added or removed after initial creation;
- whether exercises may appear more than once within the same workout day;
- how routine edits affect an in-progress session; and
- whether deleting a routine preserves all historical sessions by default.
