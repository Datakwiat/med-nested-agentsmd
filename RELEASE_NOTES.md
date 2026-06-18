# Release Notes

## [0.3.0] - 2026-06-18

### Changed
- **backend-api:** Added `tone` field (`friendly`) to `GET /hello` example response
- Updated backend API test expectations for the `GET /hello` payload

### Coverage
- Backend API test coverage: pending verification via workflow

## [0.2.0] - 2026-06-18

### Changed
- **backend-api:** Added `audience` field (`developers`) to `GET /hello` example response
- Updated backend API test expectations for the `GET /hello` payload

### Coverage
- Backend API test coverage: pending verification via workflow

## [0.1.6] - 2026-06-18

### Changed
- **backend-api:** Added `variant` field (`classic`) to `GET /hello` example response
- Updated backend API test expectations for the `GET /hello` payload

### Coverage
- Backend API test coverage: 100% (meets 85% threshold)

## [0.1.5] - 2026-06-18

### Changed
- **backend-api:** Added `GET /hello` hello-world response endpoint with `example` flag
- Added backend API tests for `GET /health` and `GET /hello`
- Updated backend startup behavior to listen only when run directly, avoiding test-time side effects

### Coverage
- Backend API test coverage: 100% (meets 85% threshold)

## [0.1.4] - 2026-06-18

### Changed
- **executor-worker:** Added `flavor` field (`vanilla`) to hello_world response payload
- Updated executor tests to assert `flavor` in direct and handler-based responses

### Coverage
- Test coverage: 87.50% (exceeds 85% threshold)

## [0.1.3] - 2026-06-18

### Changed
- **executor-worker:** Added `example` boolean field to hello_world response payload
- Updated executor tests to assert `example` in direct and handler-based responses

### Coverage
- Test coverage: 87.50% (exceeds 85% threshold)

## [0.1.2] - 2026-06-18

### Changed
- **executor-worker:** Added `greeting` field (`hello-world`) to hello_world response
- Updated executor tests to validate `greeting` in direct and handler-based responses

### Coverage
- Test coverage: 87.50% (exceeds 85% threshold)

## [0.1.1] - 2026-06-18

### Changed
- **executor-worker:** Added timestamp field to hello_world response for tracking execution time
- Added module-level docstring and function docstrings for code quality
- Updated test suite to validate new timestamp and version fields

### Fixed
- Pylint code quality issues (missing docstrings)

### Coverage
- Test coverage: 87.50% (exceeds 85% threshold)
