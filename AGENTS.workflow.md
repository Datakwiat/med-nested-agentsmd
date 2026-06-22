## Scope
- Use active module `apps/{module}/AGENTS.md` for lint, test, coverage, deploy, smoke, and commit tag.
- Release notes: update or create RELEASE_NOTES.md with a brief summary for each new semver (track current version from repo root VERSION file).

## Working Directory Rule
- Run all app commands from the app directory (e.g. `apps/converter-service/`); runtime tools resolve config locally.
- One-off root execution only when explicitly targeting the module project/config.

## Workflow
1. Run lint.
2. Create or update tests for code changes using the **Test Development** section.
3. Run tests.
4. Run coverage gate.
5. Bump semver version (MAJOR.MINOR.PATCH).
6. Update RELEASE_NOTES.md with a brief summary for that semver.
7. Commit using the required format (mandatory when source code changed).
8. Deploy using the active module deploy command.
9. Run smoke test; report pass/fail and rollback suggestion on failure.
10. Update docs/diagrams when rearchitecting indicators are present.

## Test Development

- New functions/methods: create test cases (unit or integration as appropriate).
- Behavior changes: update affected tests.
- Refactoring: ensure no coverage regression.
- Frameworks: see app-level test commands for coverage thresholds and framework choice.

## Commit format
- `[module][vMAJOR.MINOR.PATCH] description; rationale; impact`

## Semver Decision Rule (Mandatory)
- MAJOR: breaking changes, removed behavior, incompatible schema
- MINOR: additive features, new optional capabilities
- PATCH: fixes, refactors, tests, docs
- Uncertain MINOR vs PATCH: choose MINOR; state rationale in commit and release notes
- Version source: repo root VERSION file; bump before every commit