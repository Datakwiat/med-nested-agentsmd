from app.main import health


def test_health() -> None:
    response = health()
    assert response["ok"] is True
