## Always-On
- HITL: if irreversible infrastructure action, require APPROVED: yes (scope=one action); if missing, stop
- Never target the main branch for deployments
- Deploy only to branch-scoped or sandbox environments
- For infrastructure changes, report impacted services, affected environments, rollback path, and worst-case impact

## Architecture (Routing Summary)
- frontend-app: React UI; authors and views data quality workflows.
- backend-api: API gateway; validates requests, routes to converter and executor.
- converter-service: Normalizes rule definitions into executable form.
- executor-worker: Executes normalized rules and emits outcomes.

### Interaction Path
Primary route: frontend-app -> backend-api -> converter-service -> executor-worker

## Response Gate (Mandatory)
- If source code is edited, run `AGENTS.workflow.md` end-to-end before responding.
- Use the active module's `apps/{module}/AGENTS.md` commands.
- Report pass/fail by workflow stage; stop on required-stage failure and include rollback suggestion when deploy or smoke fails.

## Review (Automatic on Rearchitecting Changes)
- Trigger when any indicator in `AGENTS.docs.md` is detected
- Read `AGENTS.docs.md` and apply required doc and diagram updates