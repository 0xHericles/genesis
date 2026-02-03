/**
 * Health check handler
 */
import { json } from "../utils/response";

export function handleHealth(): Response {
  return json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
}
