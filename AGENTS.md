## Always-On
- HITL: if irreversible infrastructure action, require APPROVED: yes (scope=one action); if missing, stop
- Never target the main branch for deployments
- Deploy only to branch-scoped or sandbox environments
- For infrastructure changes, report impacted services, affected environments, rollback path, and worst-case impact

## Response Gate (Mandatory)
- If any source code is edited in any module, follow the canonical pre-commit workflow in `AGENTS.workflow.md`, and create a commit before responding.
- Use the active module's `apps/{module}/AGENTS.md` commands for lint, tests, and coverage.
- Execute all workflow steps in order and report pass/fail per step before responding.
- If any required step fails, do not proceed to user response.
- After the mandatory commit for source changes, follow the CD deploy/smoke workflow in `AGENTS.workflow.md` to validate the commit.
- Use the active module's `apps/{module}/AGENTS.md` commands for deploy and smoke, and report pass/fail.
- If deploy or smoke fails, flag the failure and report rollback suggestion before responding.

## Review (Automatic on Rearchitecting Changes)
- Trigger when any indicator in `AGENTS.docs.md` is detected
- Read `AGENTS.docs.md` and apply required doc and diagram updates

