# Data Persistence Requirements

Status: Draft

## Purpose

Define how user data is saved and restored in the local-first progressive web application, and establish the future boundary for account-backed synchronization.

## 1. Local-First Storage

### DAT-LOC-001 — Local application data

Before account synchronization is introduced, the application shall store user data locally on the device using browser-supported persistent storage.

### DAT-LOC-002 — Offline workout use

The user shall be able to view plans, run workouts, log sets and circuits, and review locally available history without an internet connection.

Features that require a remote AI service may be unavailable offline without blocking ordinary workout use.

### DAT-LOC-003 — Local working copy

When account synchronization is introduced, local storage shall remain the application's working copy so that ordinary workout use does not depend on continuous network access.

## 2. Explicitly Saved Configuration

### DAT-CFG-001 — Save configuration changes

Editable configuration screens, including plans, exercises, settings, and AI permissions, shall provide an explicit Save action.

### DAT-CFG-002 — Save availability

The Save action shall be enabled only when the current values differ from the last saved values.

### DAT-CFG-003 — Unsaved navigation

When the user attempts to leave a configuration screen with unsaved changes, the application shall prevent silent data loss by allowing the user to save, discard, or cancel navigation.

### DAT-CFG-004 — No typing autosave requirement

The application shall not be required to persist configuration changes while the user is still typing or editing before Save is selected.

### DAT-CFG-005 — Shared manual and AI persistence

AI-applied configuration changes shall use the same validation and persistence mechanisms as equivalent manual changes.

## 3. Immediate Workout Persistence

### DAT-WRK-001 — Persist workout actions

Meaningful workout actions shall be persisted when the action is completed rather than waiting for a separate Save operation.

This includes completing, editing, undoing, or skipping a set or circuit; replanning a session; and completing or abandoning a session.

### DAT-WRK-002 — Persist timing anchors

The application shall persist the timestamps needed to reconstruct the active recovery timer and current recovery-adjusted targets.

### DAT-WRK-003 — Restore active session

Closing, refreshing, or reopening the application shall restore an in-progress session with its logged work, current workout position, and elapsed recovery time.

### DAT-WRK-004 — No pause through closure

Closing the application or leaving the workout screen shall not pause the session's elapsed-time or recovery model.

### DAT-WRK-005 — Preserve abandoned work

Abandoning a session shall mark the session as missed and allow the user to move on, but shall preserve all work already logged in that session.

Abandonment shall not delete completed sets, circuits, timing records, or other recorded session data.

## 4. Historical Integrity

### DAT-HIS-001 — Preserve completed sessions

Editing a plan or exercise shall not rewrite previously completed or abandoned sessions.

### DAT-HIS-002 — Preserve history after removal

Removing an exercise from a plan or deleting an exercise from the active library shall not delete historical records that reference it.

### DAT-HIS-003 — Preserve source records

Editing, removing, or resetting a proven maximum shall not delete the underlying workout records unless the user separately deletes those records through a supported action.

### DAT-HIS-004 — Recalculate derived data

Analytics, proven maximums, and other derived values shall be recalculated when relevant source records are corrected.

The application should avoid treating recalculable analytics as the sole authoritative source of historical truth.

### DAT-HIS-005 — No configuration undo history

The initial application shall not be required to maintain a separate version history or multi-step undo system for saved configuration changes.

Users may correct saved configuration through ordinary editing.

## 5. Account Synchronization

### DAT-SYN-001 — Future account storage

A future account-backed version may synchronize the local working copy with remotely stored account data.

Account synchronization is not required for the initial local-first release.

### DAT-SYN-002 — Merge existing local data

When a user signs into or creates an account on a device that already contains local data, the application shall merge the local records into the account rather than replacing either history wholesale.

### DAT-SYN-003 — Merge account and device history

When account data and local-device data both contain records, synchronization shall preserve records from both sources unless they can be identified as the same logical record.

### DAT-SYN-004 — Prevent silent loss

Synchronization conflicts shall not silently delete completed or abandoned workout records.

When the application cannot safely resolve a conflict automatically, it shall preserve both versions or request user resolution.

### DAT-SYN-005 — Automatic synchronization

When account synchronization is enabled and connectivity is available, the application should synchronize automatically without requiring the user to initiate each backup.

### DAT-SYN-006 — Visible synchronization status

The application shall indicate whether local changes are synchronized, waiting for connectivity, or affected by an error.

The user shall be able to retry a failed synchronization.

### DAT-SYN-007 — Offline changes

Changes made offline shall remain usable locally and shall be eligible for synchronization when connectivity returns.

## 6. Excluded Initial Features

### DAT-OUT-001 — No import or export workflow

The initial product shall not require manual backup export, backup import, or file-based history transfer.

User data shall either remain on the local device or, in a future phase, synchronize through an account.

## 7. Open Questions

The following details remain intentionally unresolved:

- the IndexedDB schema and migration strategy;
- the definition and generation of stable record identifiers;
- how duplicate records are detected during synchronization;
- the exact conflict-resolution interface;
- account authentication and remote storage technology;
- synchronization frequency and retry policy;
- storage-quota and browser-data-removal warnings; and
- whether users may explicitly delete individual historical sessions in the initial release.
