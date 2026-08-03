# Target Generation Requirements

Status: Draft

## Purpose

Define how workout targets are established, advanced, retained, adjusted, and explained across a mesocycle.

## 1. Initial Target Establishment

### TGT-INIT-001 — User-provided first week

For a newly added exercise, the user shall provide the initial targets for the first week.

The application shall not generate recommendations for that exercise until performance data has been recorded.

### TGT-INIT-002 — Unproven exercise state

A newly added exercise shall begin in an unproven state.

The application shall distinguish between provisional targets and proven maximums.

### TGT-INIT-003 — Initial progression assumption

Until failure or another limiting condition occurs, the application shall assume that the user can add one repetition per mesocycle to each set position.

The projected increase shall remain provisional until demonstrated through recorded performance.

## 2. Mesocycle Target Shape

### TGT-MESO-001 — First-set weekly progression

Within a mesocycle, the first-set target shall increase by one repetition after each successful week.

### TGT-MESO-002 — Later-set targets

Later-set targets shall generally remain static throughout the mesocycle and represent the projected targets to be demonstrated by the final week.

### TGT-MESO-003 — Reduced fatigue in early weeks

Later-set targets may exceed the previous proven maximums when the lower first-set target is expected to create less fatigue.

The application shall treat these later-set targets as provisional until they are successfully demonstrated.

### TGT-MESO-004 — Descending target shape

Each later set shall have a target at least one repetition lower than the preceding set.

When a calculated target would violate this rule, the application shall reduce the later-set target until the descending shape is restored.

### TGT-MESO-005 — Example progression

Given a previous proven maximum of `10 / 6 / 4`, the application may project a new maximum of `11 / 7 / 5` and generate a mesocycle shaped as:

- Week 1: `8 / 7 / 5`
- Week 2: `9 / 7 / 5`
- Week 3: `10 / 7 / 5`
- Week 4: `11 / 7 / 5`

This example illustrates the intended shape and does not define the final fatigue formula.

## 3. Success, Failure, and Evidence

### TGT-EVD-001 — Successful target

Completing a displayed target shall count as positive evidence of the user's capacity under the recorded conditions.

### TGT-EVD-002 — Overperformance

Exceeding a displayed target may establish a new proven maximum beyond the prescribed target.

### TGT-EVD-003 — Proven maximum retention

Underperformance shall not lower a previously proven maximum.

A later poor result shall not erase a performance that the user has already demonstrated.

### TGT-EVD-004 — First-set failure

When the user fails to complete the first-set target, the application shall not advance the first-set target during the remainder of that mesocycle.

The failed target shall remain the prescribed first-set target for subsequent weeks in the same mesocycle.

The application shall not reduce the target to the failed actual result.

### TGT-EVD-005 — Later-set failure

When a later set fails to meet a provisional target, future targets for that set position shall fall back to the previously proven maximum for that position.

### TGT-EVD-006 — Earlier failure and later underperformance

Underperformance in later sets after an earlier failed set shall not be used to lower existing proven maximums.

### TGT-EVD-007 — Rest-adjusted success

A recovery-adjusted target shall count as the active target for evidence purposes.

Successfully completing that target may establish a new proven maximum and may affect the next mesocycle.

### TGT-EVD-008 — Aggressive recovery estimate

The recovery model shall be calibrated conservatively against false progression credit by assuming recovery occurs slightly faster than the user's likely actual recovery.

### TGT-EVD-009 — Skipped work

Skipped sets, circuits, or exercises shall provide no evidence of success or failure.

Skipping the final proving week shall leave the relevant next-mesocycle targets unchanged.

### TGT-EVD-010 — Replanned work

Work removed or changed through replanning shall not be treated as failed evidence unless the user performs and fails the revised target.

## 4. Between-Mesocycle Progression

### TGT-NXT-001 — New mesocycle from proven performance

The next mesocycle shall be generated from the highest relevant proven maximums and the configured training rules.

### TGT-NXT-002 — Advancement frequency

An exercise shall not be required to advance every mesocycle.

Failure to advance during one mesocycle shall not be treated as regression.

### TGT-NXT-003 — Final-week proof

The final week shall be the primary opportunity to prove the projected maximums for the mesocycle.

Earlier overperformance may still establish a higher proven maximum.

### TGT-NXT-004 — Unchanged mesocycle after no proof

When no new maximum is proven, the next mesocycle shall begin from the same relevant proven maximums rather than from a lower estimate.

## 5. Rep Limits and Weight Progression

### TGT-WGT-001 — Configurable rep limits

The application shall support global minimum and maximum rep settings for weighted exercises.

Each weighted exercise may override the global minimum and maximum.

### TGT-WGT-002 — Unweighted exercises

Unweighted exercises shall not use the weighted-exercise minimum and maximum rep rules for triggering load progression.

### TGT-WGT-003 — First-set rep cap

Reaching the configured maximum rep count on the first set shall trigger a proposed weight increase for the next mesocycle.

### TGT-WGT-004 — Configurable weight increments

The application shall support a default weight increment and per-exercise weight-increment overrides.

### TGT-WGT-005 — Relative load effect

The target calculation shall account for the relative size of a weight increase rather than assuming that the same absolute increase has the same effect across exercises.

For example, a 10-pound increase from 45 to 55 pounds shall be treated as more significant than a 10-pound increase from 265 to 275 pounds.

### TGT-WGT-006 — Preserve minimum reps

After a proposed weight increase, the application shall estimate the expected repetitions for every set.

If any estimated set falls below the configured minimum, the application shall reduce the proposed weight increase until an available load is found that preserves the minimum.

### TGT-WGT-007 — Supported load increments

Generated weights shall conform to the increments supported by the user's configured equipment.

The application shall not prescribe mathematically ideal but unavailable loads.

### TGT-WGT-008 — Initial estimation and later calibration

The first implementation may use a generic strength or repetition model to estimate performance after a load change.

As sufficient user history becomes available, the application should prefer exercise-specific estimates derived from that user's recorded data.

## 6. Maximum Management

### TGT-MAX-001 — Edit proven maximum

The user shall be able to edit a proven maximum when it is incorrect or no longer applicable.

### TGT-MAX-002 — Remove maximum evidence

The user shall be able to remove a specific proven-maximum record without deleting the underlying workout unless explicitly requested.

### TGT-MAX-003 — Reset progression state

The user shall be able to reset an exercise's progression state while preserving workout history unless the user separately deletes that history.

### TGT-MAX-004 — Maximum provenance

The application shall retain the session, date, target, actual result, and recovery context that established each proven maximum.

## 7. Deload Targets

### TGT-DEL-001 — Deload basis

Deload targets shall be derived from the first-week targets of the current mesocycle rather than from the final or maximum-effort week.

### TGT-DEL-002 — Weighted exercise deload

For a weighted exercise, the default deload target shall reduce effective load by 10 percent and reduce each first-week repetition target by 15 percent.

Repetition targets shall be rounded to the nearest whole repetition.

Generated weights shall conform to the increments supported by the user's configured equipment.

### TGT-DEL-003 — Effective load

When an exercise includes a bodyweight contribution, the 10-percent load reduction shall be calculated from effective total load rather than external resistance alone.

Effective total load shall be calculated from external resistance plus the configured bodyweight contribution for the exercise.

For example, a 200-pound user performing a squat with 200 pounds of external resistance and a 100-percent bodyweight contribution has an effective load of 400 pounds; a 10-percent deload reduces the external resistance by 40 pounds.

### TGT-DEL-004 — Unweighted exercise deload

When load cannot be practically reduced, the default deload target shall reduce each first-week repetition target by 30 percent.

Repetition targets shall be rounded to the nearest whole repetition.

### TGT-DEL-005 — Partial load reduction

When the calculated effective-load reduction cannot be fully achieved through available external-resistance changes, the application shall reduce external resistance as far as practical and may apply additional repetition reduction.

The exact compensation formula may remain approximate.

### TGT-DEL-006 — Deload evidence

Deload performance shall not establish, lower, or otherwise drive proven maximums or future progression targets.

Failure to complete a deload target shall not be treated as evidence of regression.

### TGT-DEL-007 — Practical calculation

Deload calculations may use intentionally simple estimates and configured bodyweight-contribution values because deload performance is not used to establish progression evidence.

## 8. Target Explanation

### TGT-EXP-001 — Concise explanation

Every generated target shall have a concise explanation that identifies the main reasons for the prescribed weight, repetitions, and effort.

### TGT-EXP-002 — Detailed explanation

The user shall be able to view the underlying calculation, assumptions, user-history inputs, training rationale, and supporting evidence.

### TGT-EXP-003 — Evidence categories

Detailed explanations shall distinguish among:

- direct user performance data;
- research-supported guidance;
- conventional programming rules;
- product-specific heuristics; and
- unresolved assumptions or uncertainty.

### TGT-EXP-004 — Adjustment visibility

When a target differs from its base value because of recovery, replanning, load changes, deloading, or mesocycle position, the explanation shall identify the factors that caused the adjustment.

## 9. Open Questions

The following details remain intentionally unresolved:

- the exact fatigue model used to project later-set targets;
- the exact recovery curve and normalization method;
- the generic formula used after a weight increase;
- rounding behavior for predicted repetitions outside deload calculations;
- how user-specific estimates replace generic formulas;
- how circuits establish and retain maximums;
- default and per-exercise bodyweight-contribution values;
- how partial load reductions are compensated with additional rep reductions;
- whether maximum provenance should retain multiple equivalent records; and
- the final interaction for editing, removing, or resetting maximums.
