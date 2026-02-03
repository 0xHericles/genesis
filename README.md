<div align="center">

<img src="assets/logo.png" alt="Genesis" width="100%">

<br>

**Personal AI agent framework for Cursor**

A self-learning system that accumulates your patterns, preferences, and learnings over time.

[![Deploy](https://github.com/0xHericles/genesis/actions/workflows/deploy.yml/badge.svg)](https://github.com/0xHericles/genesis/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[Install](#install) · [Commands](#commands) · [Protocol](#protocol) · [How It Works](#how-it-works)

</div>

---

## Install

```bash
curl -fsSL genesis.hericl.es | bash
```

This installs:
- **Commands** → `~/.cursor/commands/`
- **Rules** → `~/.cursor/rules/` (auto-applied)
- **Skill** → `~/.cursor/skills/`
- **User data** → `~/.genesis/`

## Commands

Use these from any Cursor workspace:

| Command | Purpose | Example |
|---------|---------|---------|
| `/ask` | Any question — auto-routes to the right mode | `/ask How does auth work?` |
| `/plan` | Design before building | `/plan Add caching layer` |
| `/build` | Implement code | `/build Add pagination` |
| `/review` | Audit code for issues | `/review the auth changes` |
| `/fix` | Debug and fix bugs | `/fix Login returning 500` |
| `/learn` | Extract insights, update playbooks | `/learn from today's work` |

## Protocol

Shorthand for efficient communication:

```
>plan >build >review >fix >learn     # modes
.1 .2 .3 .4 .5 .6 .7 .8 .9 .10       # principles
~pending ~wip ~blocked ~done          # status
!crit !high !med !low                 # severity
@back @web @[name]                    # workspaces
```

**Example:**
```
>build @backend ~wip .1
Add user pagination — investigating existing patterns first
```

## Principles

Ten rules that guide all work. Reference by number (`.1`, `.2`, etc).

| # | Principle | TL;DR |
|---|-----------|-------|
| .1 | **Investigate First** | Understand before changing |
| .2 | **Data Flows Down** | Frontend → Service → Backend → DB |
| .3 | **Single Source of Truth** | No duplicate state |
| .4 | **All or Nothing** | Atomic operations, no partial states |
| .5 | **Types are Contracts** | Type everything |
| .6 | **Errors are Visible** | Handle errors, don't hide them |
| .7 | **Clean Up After Yourself** | No resource leaks |
| .8 | **Security by Default** | Validate inputs, no secrets in code |
| .9 | **Test What Matters** | Critical paths have tests |
| .10 | **Document the Why** | Explain complex logic |

When principles conflict, lower numbers win.

## How It Works

Genesis is a **self-learning** framework.

**The loop:**

1. **Use commands** — Work with `/plan`, `/build`, `/review`, `/fix`
2. **Run `/learn`** — Extract insights after significant work
3. **Patterns accumulate** — Saved to `~/.genesis/playbooks/`
4. **System improves** — Future suggestions use your learned patterns

The more you use it, the smarter it gets about *your* codebase and preferences.

## Project Structure

```
~/.cursor/                  # Cursor config (installed)
├── commands/               # /ask, /plan, /build, /review, /fix, /learn
├── rules/                  # Auto-applied rules
└── skills/genesis-agent/   # Framework skill

~/.genesis/                 # Your data (grows over time)
├── config.json             # Your workspaces
├── plans/                  # Active plans
├── learnings/              # Extracted insights
├── postmortems/            # Failure records
└── playbooks/              # Your learned patterns ← self-learning
```

## Workspaces

Configure your projects in `~/.genesis/config.json`:

```json
{
  "workspaces": {
    "backend": {
      "path": "/path/to/backend",
      "type": "backend",
      "language": "python"
    },
    "frontend": {
      "path": "/path/to/frontend",
      "type": "frontend",
      "language": "typescript"
    }
  }
}
```

Reference in commands with `@backend`, `@frontend`, etc.

## Contributing

```bash
# Clone
git clone https://github.com/0xHericles/genesis.git
cd genesis

# Install from source
./install.sh
```

## Philosophy

> **Precision over speed. Verification before polish. Learning over repetition.**

Genesis is built on the belief that AI agents work best with:
- **Principles** — Clear rules that guide decisions
- **Playbooks** — Standard patterns for common tasks  
- **Self-learning** — Continuous improvement from your work
- **Simplicity** — Clean, focused commands that do one thing well

---

<div align="center">

**[MIT License](LICENSE)**

Made for humans who work with AI.

</div>
