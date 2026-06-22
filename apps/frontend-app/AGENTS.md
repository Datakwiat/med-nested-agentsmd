## Module
Commit tag: [frontend-app]
Runtime: Node 20 + React 18 + TypeScript 6.0.x (no 6.1+)
Code style: TypeScript strict; explicit types preferred; eslint clean

## Architecture
- User-facing UI for authoring data-quality workflows and viewing run results.
- Presentation boundary only; backend orchestration/business rules stay outside this module.

## Commands
lint: npm run lint
test: npm run test
coverage: npx vitest run --coverage --coverage.thresholds.lines=85
deploy: make deploy-frontend-branch
smoke: make smoke

