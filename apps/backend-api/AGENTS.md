## Module
Commit tag: [backend-api]
Runtime: Node 20 + Express
Code style: TypeScript/JavaScript lint-clean; explicit request/response contracts

## Architecture
- Exposes API endpoints for workflow operations and status retrieval.
- Orchestration boundary between frontend-app and Python services.

## Commands
lint: npm run lint
test: npm run test
coverage: npm run test:coverage -- --check-coverage --lines 85
deploy: make deploy-backend-branch
smoke: make smoke