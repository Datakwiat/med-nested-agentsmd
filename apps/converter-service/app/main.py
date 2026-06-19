from fastapi import FastAPI

app = FastAPI()


@app.get('/health')
def health() -> dict[str, str | bool]:
    return {"ok": True, "service": "converter-service"}
