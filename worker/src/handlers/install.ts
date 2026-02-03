/**
 * Install script handler
 */
import { INSTALL_SCRIPT } from "../content/install-script";
import { text } from "../utils/response";

export function handleInstall(): Response {
  return text(INSTALL_SCRIPT, { cache: "medium" });
}
