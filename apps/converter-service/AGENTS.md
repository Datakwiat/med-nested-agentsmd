## Module
Commit tag: [converter-service]
Runtime: Python 3.11 + FastAPI
Code style: PEP 8; type hints required; mypy strict where configured

## Architecture
- Translates incoming rule definitions into canonical executable payloads.
- Transformation boundary from external rule inputs to the internal execution model.

## Commands
lint: uv run pylint app/main.py
test: uv run pytest tests/ -q
coverage: uv run pytest tests -q --cov=app --cov-fail-under=85
deploy: make deploy-converter-branch
smoke: make smoke