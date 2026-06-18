import express from 'express';
import { fileURLToPath } from 'node:url';

const app = express();
app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'backend-api' });
});

app.get('/hello', (_req, res) => {
  res.json({
    ok: true,
    message: 'Hello, World!',
    service: 'backend-api',
    example: true,
    variant: 'classic',
    audience: 'developers',
    tone: 'friendly',
  });
});

const isDirectRun = process.argv[1] === fileURLToPath(import.meta.url);

/* c8 ignore next 5 */
if (isDirectRun && process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('backend-api listening on 3000');
  });
}

export default app;
