/**
 * Genesis Worker
 *
 * A Cloudflare Worker that serves:
 * - Landing page (browsers)
 * - Install script (CLI tools)
 *
 * @example curl -fsSL genesis.hericl.es | bash
 */

import { handleInstall, handleLanding, handleHealth, handleDocs } from "./handlers";
import { isCLI } from "./utils/request";
import { notFound } from "./utils/response";

export interface Env {
  // Add environment bindings here if needed
}

export default {
  async fetch(request: Request, _env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // Route requests
    switch (path) {
      case "/":
        // CLI tools get install script, browsers get landing page
        return isCLI(request) ? handleInstall() : handleLanding();

      case "/install":
      case "/install.sh":
        return handleInstall();

      case "/health":
      case "/healthz":
        return handleHealth();

      default:
        // Handle docs routes
        if (path.startsWith("/docs")) {
          return handleDocs(path);
        }
        return notFound("Not found. Try: curl -fsSL genesis.hericl.es | bash");
    }
  },
};
