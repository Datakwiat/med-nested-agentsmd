## Module
Commit tag: [converter-service]
Runtime: Python 3.11 + FastAPI
Code style: PEP 8; type hints required; mypy strict where configured

## Env Setup
- Requires `uv` package manager: `curl -LsSf https://astral.sh/uv/install.sh | sh`
- On macOS, add to PATH: `export PATH="$HOME/.local/bin:$PATH"`
- `uv run` automatically creates `.venv` and syncs dependencies from pyproject.toml—no manual setup needed

## Commands
lint: uv run pylint app/main.py
test: uv run pytest tests/ -q
coverage: uv run pytest tests -q --cov=app --cov-fail-under=85
deploy: make deploy-converter-branch
smoke: make smoke

