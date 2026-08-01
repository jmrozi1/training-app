# Training App

Initial Issue #2 scaffold:

- typed workout domain model
- realistic multi-block mock program
- bodyweight history and result snapshots
- equipment constraints and load helpers
- navigation helpers across sets, exercises, days, weeks, and blocks
- stable mock scenario entry points for workout UI development
- Vitest coverage
- no UI, backend, database, or recommendation engine yet

## Commands

```powershell
npm install
npm run typecheck
npm test
```

## Mock UI scenarios

`src/mock/mock-scenarios.ts` provides stable locations for the major states
required by Issue #3, including completed, missed, exceeded, skipped, edited,
unlogged, deload, equipment, and navigation-boundary examples.

UI code should use these scenario IDs during development rather than duplicating
fixture array indexes throughout components.
