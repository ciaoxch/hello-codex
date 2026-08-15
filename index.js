const http = require('node:http');

const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT) || 3000;

const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Codex</title>
    <style>
      :root { color-scheme: dark; }
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; font-family: system-ui, sans-serif; background: #101827; }
      main { text-align: center; padding: 3rem; border: 1px solid #334155; border-radius: 1rem; background: #172033; box-shadow: 0 20px 45px #0006; }
      h1 { margin: 0; color: #67e8f9; font-size: clamp(2.5rem, 10vw, 5rem); }
      p { color: #cbd5e1; }
    </style>
  </head>
  <body>
    <main>
      <h1>Hello Codex</h1>
      <p>Your Node.js web project is running.</p>
    </main>
  </body>
</html>`;

const server = http.createServer((request, response) => {
  if (request.url !== '/' && request.url !== '/favicon.ico') {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(page);
});

server.listen(port, host, () => {
  console.log(`Hello Codex is available at http://${host}:${port}`);
});
