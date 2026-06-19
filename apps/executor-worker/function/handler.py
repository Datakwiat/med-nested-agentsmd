"""Lambda event handler for executor-worker service."""


def hello_world() -> dict:
    """Hello world example function."""
    return {
        "ok": True,
        "message": "Hello, World!",
        "greeting": "hello-world",
        "example": True,
        "flavor": "vanilla",
        "service": "executor-worker",
        "version": "1.0",
        "timestamp": "2026-06-18",
    }


def handler(event: dict, context: object) -> dict:
    """Handle Lambda event invocation."""
    # pylint: disable=unused-argument
    if event.get("smoke"):
        return {"ok": True, "service": "executor-worker", "mode": "smoke"}
    if event.get("hello"):
        return hello_world()
    return {"ok": True, "processed": True}
