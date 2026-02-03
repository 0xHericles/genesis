/**
 * Landing page handler
 */
import { LANDING_PAGE } from "../content/landing-page";
import { html } from "../utils/response";

export function handleLanding(): Response {
  return html(LANDING_PAGE, { cache: "medium" });
}
