import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const browserDistFolder = join(__dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * إضافة CSP header مخصصة للتطوير
 */
app.use((req, res, next) => {
  // فقط للتطوير - تعطيل CSP أو تعديلها
  if (process.env['NODE_ENV'] !== 'production') {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; " +
      "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; " +
      "connect-src 'self' http://localhost:* ws://localhost:* wss://localhost:* http://gc.kis.v2.scr.kaspersky-labs.com; " +
      "img-src 'self' data: blob:;"
    );
  } else {
    // للإنتاج - CSP أكثر أمانًا
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; " +
      "script-src 'self'; " +
      "style-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com; " +
      "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; " +
      "connect-src 'self'; " +
      "img-src 'self' data:;"
    );
  }
  next();
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
    console.log(`CSP is ${process.env['NODE_ENV'] === 'production' ? 'enabled for production' : 'configured for development'}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);