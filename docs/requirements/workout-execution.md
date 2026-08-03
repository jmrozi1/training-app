# Workout Execution Requirements

Status: Draft

## Purpose

Define the initial requirements for running a workout. These requirements describe the rough product shape and are expected to be refined as the interaction model, training rules, and tests are developed.

## 1. Workout Navigation

### EXE-NAV-001 — Navigate between exercises

The user shall be able to navigate between exercises within the selected workout.

All sets for the selected exercise shall be visible on one screen. The user shall not navigate between individual sets.

### EXE-NAV-002 — Navigate between workouts

The user shall be able to navigate between workout days.

### EXE-NAV-003 — Session creation

Opening or viewing a workout shall not create a session.

A session shall begin when the user logs the first completed set or circuit.

### EXE-NAV-004 — Leaving an in-progress session

When the user attempts to navigate away from a workout after its session has begun, the application shall ask whether to:

- preserve the current session and leave the workout;
- abandon the current session; or
- cancel navigation and remain in the workout.

### EXE-NAV-005 — Preserve elapsed time

Preserving and leaving a session shall not pause its timing or recovery model.

When the user returns, targets shall reflect the actual elapsed time since the most recently completed set or circuit.

### EXE-NAV-006 — Abandon a session

The user shall be able to explicitly abandon an in-progress session and discard its recorded session state.

The application shall not treat ordinary time away from the workout as abandonment.

## 2. Set and Circuit Execution

### EXE-ACT-001 — View planned work

The application shall display all planned sets for the selected exercise, or the planned circuit and its component exercises, on one screen.

### EXE-ACT-002 — View target

The application shall display the current target for each set or circuit.

The target may change as elapsed recovery time changes.

### EXE-ACT-003 — Complete work

The user shall be able to complete and log a set or circuit.

Completing a set or circuit shall record its completion time and start the recovery timer used to calculate the next target.

### EXE-ACT-004 — Edit work

The user shall be able to edit the recorded values for a set or circuit.

The application shall preserve the distinction between the original target and the recorded result.

### EXE-ACT-005 — Skip work

The user shall be able to skip a planned set, circuit, or exercise.

Skipped work shall remain distinguishable from completed work and from work removed through replanning.

### EXE-ACT-006 — Undo completion

The user shall be able to undo a completed set or circuit without losing the values previously entered for it.

## 3. Timing and Recovery-Adjusted Targets

### EXE-TIM-001 — Timer start

The recovery timer shall begin when the user logs the first completed set or circuit.

The application shall not display or require a separate "not started" state before that event.

### EXE-TIM-002 — Continuous elapsed time

The timer shall continue to reflect real elapsed time while the user navigates elsewhere, closes the application, handles an interruption, or otherwise stops interacting with the workout.

The application shall not provide a workout pause action.

### EXE-TIM-003 — Preferred starting range

The training model shall support a configurable preferred starting range after a completed set or circuit.

The preferred starting range shall include both a minimum and maximum ideal start time and shall be distinct from the later recovery-adjustment threshold.

### EXE-TIM-004 — Preferred target zone

While the current target remains appropriate for the preferred training window, the application shall represent the target zone using green.

### EXE-TIM-005 — Recovery-adjusted target

After sufficient additional recovery, the application shall automatically increase the target according to the recovery model.

The first target increase shall transition the visual indicator from green to cyan.

Further recovery shall progressively transition the indicator from cyan toward purple as the target approaches its fully recovered value.

### EXE-TIM-006 — Fully recovered target

The recovery model shall define a maximum or fully recovered target beyond which additional elapsed time does not further increase the prescription.

Purple shall represent the fully recovered end of the default visual progression.

### EXE-TIM-007 — Continuous model

The transition from the initial fatigued target toward the fully recovered target shall be based on a continuous recovery model rather than a paused or resumed session state.

The exact recovery curve and target calculation shall be defined in target-generation requirements.

### EXE-TIM-008 — Automatic display updates

The displayed target and visual recovery indicator shall update automatically as elapsed time changes.

The user shall not need to mark when training begins or acknowledge a timer transition.

### EXE-TIM-009 — Minimal default interface

The default workout interface shall communicate timing and target status primarily through the timer, target values, and visual color progression.

The application shall avoid displaying explanatory text unless the user requests it.

### EXE-TIM-010 — Adjustment explanation

When a target has increased beyond the green target zone, the application shall display a help or information control associated with that target.

Activating the control shall provide a concise explanation of why the target changed.

The user shall be able to request a more detailed explanation of the calculation, assumptions, training rationale, and supporting evidence.

### EXE-TIM-011 — Audio guidance

The application may provide optional nonverbal audio guidance that changes gradually as the preferred starting range approaches.

Audio guidance shall not require user acknowledgment and shall not imply that missing the preferred range ends or pauses the workout.

The exact audio design remains open for later refinement.

### EXE-TIM-012 — Display themes

Recovery state shall be represented internally independently of its display colors.

The initial default theme shall use green through cyan to purple.

The application may later provide alternative visual mappings, including a user-configurable grayscale mode.

## 4. Session Replanning

### EXE-REP-001 — Request replanning

During a session, the user shall be able to report circumstances that affect the remaining workout, including:

- limited time;
- fatigue;
- illness;
- injury; and
- unavailable equipment.

### EXE-REP-002 — Generate a revised session plan

The application shall be able to generate a revised plan for the remaining work based on the information supplied by the user.

### EXE-REP-003 — Explain changes

A revised plan shall identify what changed and provide a concise explanation of why it changed.

The user shall be able to request further details.

### EXE-REP-004 — Preserve completed work

Replanning shall preserve all completed and recorded work in the current session.

### EXE-REP-005 — Review before application

The user shall be able to review, accept, reject, or manually edit the revised plan before it is applied.

### EXE-REP-006 — Session-only changes

Replanning shall modify the current session without changing the reusable routine unless the user explicitly chooses to save an applicable change to the routine.

### EXE-REP-007 — Preserve original plan

The application shall retain the original planned workout for comparison with the revised and completed session.

## 5. Open Questions

The following details remain intentionally unresolved:

- exact preferred recovery ranges;
- the recovery-adjustment threshold;
- the shape and parameters of the recovery curve;
- how targets for circuits are calculated and adjusted;
- the exact interaction for preserving versus abandoning a session;
- whether skipped work requires a reason;
- the final audio behavior;
- the final appearance and behavior of grayscale mode; and
- the rules for saving session replanning changes back into a reusable routine.
