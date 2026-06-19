## Module
Commit tag: [executor-worker]
Runtime: Python 3.11
Pattern: Lambda-style worker (event handler, no HTTP server)
Code style: PEP 8; type hints required; mypy strict where configured

## Env Setup
- Requires `uv` package manager: `curl -LsSf https://astral.sh/uv/install.sh | sh`
- On macOS, add to PATH: `export PATH="$HOME/.local/bin:$PATH"`
- `uv run` automatically creates `.venv` and syncs dependencies from pyproject.toml—no manual setup needed

## Commands
lint: uv run pylint function/handler.py
test: uv run pytest tests/ -q
coverage: uv run pytest tests -q --cov=function --cov-fail-under=85
deploy: make deploy-worker-branch
smoke: make smoke

