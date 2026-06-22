## Module
Commit tag: [executor-worker]
Runtime: Python 3.11
Code style: PEP 8; type hints required; mypy strict where configured

## Architecture
- Runs normalized rule workloads and returns deterministic execution outcomes.
- Event-driven execution boundary with no HTTP server surface.

## Commands
lint: uv run pylint function/handler.py
test: uv run pytest tests/ -q
coverage: uv run pytest tests -q --cov=function --cov-fail-under=85
deploy: make deploy-worker-branch
smoke: make smoke