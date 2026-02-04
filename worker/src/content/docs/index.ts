/**
 * Docs content loader
 * Imports markdown files as raw strings at build time
 */
import OVERVIEW from "./overview.md";
import INSTALL from "./install.md";
import AGENTS from "./agents.md";
import COMMANDS from "./commands.md";
import PRINCIPLES from "./principles.md";
import PROTOCOL from "./protocol.md";
import WORKSPACES from "./workspaces.md";

export interface DocPage {
  slug: string;
  title: string;
  content: string;
}

export const DOCS: Record<string, DocPage> = {
  "": { slug: "", title: "Overview", content: OVERVIEW },
  "install": { slug: "install", title: "Installation", content: INSTALL },
  "agents": { slug: "agents", title: "Agents", content: AGENTS },
  "commands": { slug: "commands", title: "Commands", content: COMMANDS },
  "principles": { slug: "principles", title: "Principles", content: PRINCIPLES },
  "protocol": { slug: "protocol", title: "Protocol", content: PROTOCOL },
  "workspaces": { slug: "workspaces", title: "Workspaces", content: WORKSPACES },
};

export const DOC_NAV = [
  { title: "Overview", path: "/docs" },
  { title: "Installation", path: "/docs/install" },
  { title: "Agents", path: "/docs/agents" },
  { title: "Commands", path: "/docs/commands" },
  { title: "Principles", path: "/docs/principles" },
  { title: "Protocol", path: "/docs/protocol" },
  { title: "Workspaces", path: "/docs/workspaces" },
];
