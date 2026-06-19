## Scope
- Use active module `apps/{module}/AGENTS.md` for lint, test, coverage, deploy, smoke, and commit tag.
- Release notes: update or create RELEASE_NOTES.md with a brief summary for each new semver (track current version from repo root VERSION file).

## Working Directory Rule
- **All app-level commands** from `apps/{module}/AGENTS.md` execute **from the app directory** (e.g., from `apps/converter-service/` when running converter-service commands).
- This ensures `uv run` resolves the module's pyproject.toml correctly and imports work without hacks.
- To run commands from phase root, use `uv run --project apps/{module} command` explicitly (for one-off execution only; for normal dev work, change to app dir).

## Pre-Commit (CI)
1. Run lint.
2. Create or update tests for code changes.
3. Run tests.
4. Run coverage gate.
5. Bump semver version (MAJOR.MINOR.PATCH).
6. Update RELEASE_NOTES.md with a brief summary for that semver.
7. Continue only if all checks pass.
8. Create a commit using the required format in the **Commit** section (mandatory when source code changed).

## Commit
- Format: `[module][vMAJOR.MINOR.PATCH] description; rationale; impact` (module prefix from app AGENTS commit tag + semver suffix)
- Load `.docs/commit-message-guidelines.md` only if strict format is requested or generated message is rejected.

## Semver Decision Rule (Mandatory)
- MAJOR (X.0.0): breaking API or contract changes, incompatible schema/config changes, removed behavior
- MINOR (0.X.0): backward-compatible new features, additive endpoints/events/fields, new optional capabilities
- PATCH (0.0.X): backward-compatible bug fixes, refactors, test updates, docs-only changes, non-breaking performance fixes
- If uncertain between MINOR and PATCH, choose MINOR and state rationale in commit message and release notes
- Canonical version source: repo root VERSION file (contains current semver, e.g., 1.4.2)
- All commits must bump VERSION before commit

## Deploy and Smoke (CD)
1. Run this section only after Step 8 commit is created.
2. Deploy the committed revision using the active module deploy command.
3. Run smoke test using the active module smoke command.
4. Report final status and rollback suggestion on failures.
