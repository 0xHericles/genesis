/**
 * Documentation page handler
 */
import { DOCS } from "../content/docs/index";
import { renderDocsPage } from "../content/docs/layout";
import { html, notFound } from "../utils/response";

export function handleDocs(path: string): Response {
  // Extract slug from path: /docs/install -> install, /docs -> ""
  const slug = path.replace(/^\/docs\/?/, "").replace(/\/$/, "");

  const page = DOCS[slug];

  if (page) {
    const rendered = renderDocsPage(page.title, page.content, path.replace(/\/$/, "") || "/docs");
    return html(rendered, { cache: "medium" });
  }

  return notFound("Documentation page not found. Try /docs");
}
