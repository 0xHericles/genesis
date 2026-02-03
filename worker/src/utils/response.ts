/**
 * Response utilities
 */

type CacheControl = "short" | "medium" | "long" | "none";

const CACHE_VALUES: Record<CacheControl, string> = {
  short: "public, max-age=60",
  medium: "public, max-age=300",
  long: "public, max-age=3600",
  none: "no-cache, no-store, must-revalidate",
};

interface ResponseOptions {
  status?: number;
  cache?: CacheControl;
  headers?: Record<string, string>;
}

/**
 * Create HTML response
 */
export function html(
  content: string,
  options: ResponseOptions = {}
): Response {
  const { status = 200, cache = "medium", headers = {} } = options;

  return new Response(content, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": CACHE_VALUES[cache],
      ...headers,
    },
  });
}

/**
 * Create plain text response
 */
export function text(
  content: string,
  options: ResponseOptions = {}
): Response {
  const { status = 200, cache = "medium", headers = {} } = options;

  return new Response(content, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": CACHE_VALUES[cache],
      ...headers,
    },
  });
}

/**
 * Create JSON response
 */
export function json(
  data: unknown,
  options: ResponseOptions = {}
): Response {
  const { status = 200, cache = "none", headers = {} } = options;

  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": CACHE_VALUES[cache],
      ...headers,
    },
  });
}

/**
 * Create 404 response
 */
export function notFound(message = "Not Found"): Response {
  return text(message, { status: 404, cache: "none" });
}

/**
 * Create redirect response
 */
export function redirect(url: string, permanent = false): Response {
  return new Response(null, {
    status: permanent ? 301 : 302,
    headers: { Location: url },
  });
}
