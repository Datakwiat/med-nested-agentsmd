from function.handler import handler, hello_world


def test_smoke_mode() -> None:
    result = handler({"smoke": True}, None)
    assert result["ok"] is True
    assert result["mode"] == "smoke"


def test_hello_world() -> None:
    """Test hello world function."""
    result = hello_world()
    assert result["ok"] is True
    assert result["message"] == "Hello, World!"
    assert result["greeting"] == "hello-world"
    assert result["example"] is True
    assert result["flavor"] == "vanilla"
    assert result["service"] == "executor-worker"
    assert result["version"] == "1.0"
    assert result["timestamp"] == "2026-06-18"


def test_hello_world_via_handler() -> None:
    """Test hello world through handler event."""
    result = handler({"hello": True}, None)
    assert result["ok"] is True
    assert result["message"] == "Hello, World!"
    assert result["greeting"] == "hello-world"
    assert result["example"] is True
    assert result["flavor"] == "vanilla"
    assert result["version"] == "1.0"
    assert result["timestamp"] == "2026-06-18"
