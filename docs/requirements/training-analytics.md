# Training Analytics Requirements

Status: Draft

## Purpose

Define the initial analytics dashboard for reviewing training consistency, proven exercise progress, and time spent training.

## 1. Date Range

### ANA-DATE-001 — Select analysis period

The user shall be able to select the period represented by the analytics dashboard.

All displayed consistency, progress, and training-time values shall use the selected period.

The exact preset ranges and custom-range interaction remain open for later refinement.

## 2. Training Consistency

### ANA-CON-001 — Session categories

For analytics purposes, each planned workout shall be represented as one of the following:

- completed;
- missed; or
- pending.

### ANA-CON-002 — Completed session

A session shall count as completed when the user completes the workout according to the workout-execution rules.

### ANA-CON-003 — Missed session

A workout shall count as missed when the user explicitly skips it or abandons an in-progress session.

Skipped and abandoned sessions may remain distinguishable in stored history, but shall be combined into the missed category in the initial analytics dashboard.

### ANA-CON-004 — Pending session

A workout shall remain pending until the user completes, skips, or abandons it.

A workout shall not become missed merely because calendar time has passed.

The application shall continue waiting for the user to resolve the pending workout.

### ANA-CON-005 — Consistency totals

For the selected period, the application shall display:

- completed-session count;
- missed-session count; and
- completion rate.

The completion rate shall be calculated using completed and missed sessions. Pending sessions shall not count against the completion rate.

### ANA-CON-006 — Consistency over time

The user shall be able to view completed and missed sessions over time within the selected period.

The exact chart or grouping interval remains open for later refinement.

## 3. Exercise Progress

### ANA-PRG-001 — Select exercise

The user shall be able to select an exercise for progress analysis.

### ANA-PRG-002 — Proven maximums only

The initial exercise-progress view shall use proven maximums only.

Ordinary completed performances that did not establish a proven maximum shall not appear as progress points in the initial chart.

### ANA-PRG-003 — Chronological progress

The application shall display proven maximums chronologically within the selected period.

Each displayed maximum shall include at least:

- date;
- weight, when applicable; and
- repetitions.

### ANA-PRG-004 — Maximum provenance

The user shall be able to inspect the workout record that established a displayed proven maximum.

### ANA-PRG-005 — Weighted and unweighted exercises

The progress view shall support both weighted and unweighted exercises.

Weighted exercise points shall include weight and repetitions. Unweighted exercise points shall include the applicable recorded performance values.

### ANA-PRG-006 — Preserve original performance

Any future normalized or estimated-strength view shall remain traceable to the original proven performance.

A derived metric shall not replace or obscure the recorded weight and repetition values.

## 4. Training Time

### ANA-TIME-001 — Total training time

The application shall display total time spent training during the selected period.

### ANA-TIME-002 — Average session duration

The application shall display average training time per resolved session during the selected period.

The exact handling of missed sessions in the average shall be defined with the final training-time calculation.

### ANA-TIME-003 — Training time over time

The user shall be able to view training time grouped over the selected period, such as by week or month.

The exact grouping rules remain open for later refinement.

### ANA-TIME-004 — Exclude long interruptions

Training time shall not be calculated solely as the elapsed wall-clock time between the first and final logged set or circuit.

Long interruptions shall not be counted as continuous training time merely because the session remained active.

### ANA-TIME-005 — Bounded activity calculation

Training time shall be calculated from recorded set or circuit activity and bounded intervals around that activity.

The calculation may use timing and recovery information from workout execution, but shall apply a maximum countable gap so that ordinary interruptions do not inflate training time.

### ANA-TIME-006 — Abandoned-session activity

Time spent performing recorded work in a later-abandoned session shall remain eligible to count as training time.

Abandoning the session shall affect consistency analytics but shall not erase physical activity that occurred.

## 5. Data Integrity

### ANA-DATA-001 — Source records

Analytics shall be derived from preserved workout, session, timing, and proven-maximum records rather than from independently maintained summary values when practical.

### ANA-DATA-002 — Recalculation after corrections

When the user corrects workout history or proven-maximum records, affected analytics shall be recalculated.

### ANA-DATA-003 — Category consistency

The same session shall not count simultaneously as completed and missed for the same analytics period.

## 6. Open Questions

The following details remain intentionally unresolved:

- the available date-range presets and custom-range interaction;
- the visual design of consistency and exercise-progress charts;
- the default grouping interval for time-series analytics;
- the exact bounded-gap calculation used for training time;
- whether the average duration includes only completed sessions or all sessions containing recorded work;
- how unweighted exercise progress is displayed when its result is not represented solely by repetitions; and
- whether derived estimated-strength views are included after the initial release.
