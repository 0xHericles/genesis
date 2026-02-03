/**
 * Request utilities
 */

const CLI_USER_AGENTS = ["curl", "wget", "httpie", "fetch", "powershell"];

/**
 * Detect if request is from a CLI tool (curl, wget, etc.)
 */
export function isCLI(request: Request): boolean {
  const ua = request.headers.get("User-Agent")?.toLowerCase() || "";
  return CLI_USER_AGENTS.some((cli) => ua.includes(cli));
}

/**
 * Get client info for logging
 */
export function getClientInfo(request: Request): {
  ip: string;
  userAgent: string;
  isCli: boolean;
} {
  return {
    ip: request.headers.get("CF-Connecting-IP") || "unknown",
    userAgent: request.headers.get("User-Agent") || "unknown",
    isCli: isCLI(request),
  };
}
