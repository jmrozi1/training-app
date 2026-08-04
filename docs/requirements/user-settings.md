# User Settings Requirements

Status: Draft

## Purpose

Define the small set of user-level settings that apply across the application. Settings that belong to a specific plan or exercise remain in those areas and may override these defaults.

## 1. Units

### SET-UNT-001 — Weight units

The user shall be able to choose pounds or kilograms as the application's weight unit.

The selected unit shall be used consistently when displaying and entering bodyweight, exercise weight, targets, and history.

## 2. Default Training Values

### SET-TRN-001 — Default rep range

The user shall be able to configure a default minimum and maximum rep range.

Plans and exercises may override this default through their advanced settings.

### SET-TRN-002 — Default weight increment

The user shall be able to configure a default weight increment.

Exercises may override this value through their advanced settings.

## 3. Configuration Precedence

### SET-OVR-001 — Override hierarchy

When multiple values are available, the application shall use the most specific configured value in the following order:

1. exercise override;
2. plan override;
3. user setting; and
4. application default.

## 4. Visual Preferences

### SET-VIS-001 — Visual mode

The user shall be able to select the application's visual mode.

The initial supported modes shall include the default color presentation and a grayscale presentation.

### SET-VIS-002 — Recovery-state mapping

Changing the visual mode shall change only how recovery and target states are displayed.

It shall not change the underlying recovery state, target calculation, or progression result.

## 5. Audio Guidance

### SET-AUD-001 — Enable audio guidance

The user shall be able to enable or disable workout audio guidance.

### SET-AUD-002 — Audio cue selection

The application shall support distinct optional sound effects for:

- reaching the minimum preferred rest time;
- reaching the maximum preferred rest time;
- sixty seconds before the first recovery-adjusted target increase; and
- fifteen seconds before the first recovery-adjusted target increase.

### SET-AUD-003 — One-time cues

Each enabled cue shall play at most once during the recovery period following a completed set or circuit.

After the first recovery-adjusted target increase occurs, the application shall not play additional audio cues for later target increases during that recovery period.

### SET-AUD-004 — Non-blocking guidance

Audio cues shall not require acknowledgment and shall not pause or otherwise alter session timing.

## 6. AI Permissions

### SET-AI-001 — View standing permissions

The user shall be able to view standing permissions previously granted to the AI copilot.

### SET-AI-002 — Revoke standing permissions

The user shall be able to revoke a standing AI permission.

Revoking a permission shall require future matching changes to use the normal approval flow.

### SET-AI-003 — Permission location

When the AI applies a change through a standing permission, it shall identify where that permission can be reviewed or revoked.

## 7. Bodyweight Records

### SET-BWT-001 — Bodyweight is recorded data

Bodyweight shall be treated as timestamped training data rather than as a static user setting.

### SET-BWT-002 — Workout entry

When beginning a workout, the application shall allow the user to enter or confirm bodyweight.

The most recently recorded bodyweight may be offered as the default value.

### SET-BWT-003 — Preserve historical values

The application shall preserve the bodyweight value used for historical effective-load calculations.

Changing the current bodyweight shall not rewrite prior workout calculations.

### SET-BWT-004 — Bodyweight history

Recorded bodyweight values shall be available to training analytics for display over time.

## 8. Saving Settings

### SET-SAV-001 — Explicit save

Changes to user settings shall require an explicit save action.

### SET-SAV-002 — Save availability

The save action shall be enabled only when the current values differ from the saved values.

## 9. Open Questions

The following details remain intentionally unresolved:

- whether individual audio cues can be enabled or disabled separately;
- whether audio volume is controlled inside the application or only through the device;
- the final grayscale presentation;
- how unit changes affect rounding and historical display; and
- whether bodyweight entry is prompted for every workout or only when the user chooses to update it.
