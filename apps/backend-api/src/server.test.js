import assert from 'node:assert/strict';
import http from 'node:http';
import test from 'node:test';

import app from './server.js';

let server;
let baseUrl;

test.before(async () => {
  server = http.createServer(app);
  await new Promise((resolve) => {
    server.listen(0, '127.0.0.1', resolve);
  });
  const address = server.address();
  baseUrl = `http://127.0.0.1:${address.port}`;
});

test.after(async () => {
  await new Promise((resolve, reject) => {
    server.close((err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
});

test('GET /health returns service status', async () => {
  const response = await fetch(`${baseUrl}/health`);
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.deepEqual(body, { ok: true, service: 'backend-api' });
});

test('GET /hello returns hello-world payload', async () => {
  const response = await fetch(`${baseUrl}/hello`);
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.deepEqual(body, {
    ok: true,
    message: 'Hello, World!',
    service: 'backend-api',
    example: true,
    revision: 1,
    variant: 'classic',
    audience: 'developers',
    tone: 'friendly',
  });
});
