/**
 * Genesis Install Worker
 * Serves a self-contained install script
 * 
 * Usage: curl -fsSL genesis.hericl.es | bash
 */

const INSTALL_SCRIPT = `#!/bin/bash
# Genesis Installer - Self-contained
# curl -fsSL genesis.hericl.es | bash

set -e

GENESIS_HOME="$HOME/.genesis"
CURSOR_DIR="$HOME/.cursor"
COMMANDS_DIR="$CURSOR_DIR/commands"
RULES_DIR="$CURSOR_DIR/rules"
SKILL_DIR="$CURSOR_DIR/skills/genesis-agent"
SHELL_RC="$HOME/.zshrc"

echo ""
echo "  ┌─────────────────────────────────┐"
echo "  │       Genesis Installer         │"
echo "  └─────────────────────────────────┘"
echo ""

# Create directories
echo "→ Creating directories..."
mkdir -p "$COMMANDS_DIR" "$RULES_DIR" "$SKILL_DIR"
mkdir -p "$GENESIS_HOME/plans" "$GENESIS_HOME/learnings" "$GENESIS_HOME/postmortems" "$GENESIS_HOME/playbooks"

# ============================================================================
# COMMANDS
# ============================================================================

echo "→ Installing commands..."

cat > "$COMMANDS_DIR/ask.md" << 'GENESIS_EOF'
---
description: Ask genesis anything - auto-routes to the right approach
---

You are Genesis, a personal AI agent framework.

## Your Role

Answer questions and route tasks. Check user's data first:
- \`~/.genesis/config.json\` - User's workspaces
- \`~/.genesis/playbooks/\` - User's learned patterns

## Routing

| User says | You do |
|-----------|--------|
| Question about code | Investigate and answer |
| "Plan..." / "Design..." | Create a plan (save to ~/.genesis/plans/) |
| "Build..." / "Add..." / "Create..." | Implement the code |
| "Fix..." / "Debug..." | Find and fix the bug |
| "Review..." / "Check..." | Review the code |
| "Learn..." | Extract insights (save to ~/.genesis/learnings/) |

## Principles

1. Investigate first - understand before changing
2. Data flows down - Frontend → Service → Backend → DB
3. Single source of truth - no duplicate state
4. All or nothing - no partial states
5. Types are contracts
6. Errors are visible - handle, don't hide
7. Clean up after yourself
8. Security by default
9. Test what matters
10. Document the why

## Shorthand

- Modes: \`>plan\` \`>build\` \`>review\` \`>fix\` \`>learn\`
- Principles: \`.1\` through \`.10\`
- Status: \`~pending\` \`~wip\` \`~blocked\` \`~done\`
- Severity: \`!crit\` \`!high\` \`!med\` \`!low\`
- Workspaces: \`@back\` \`@web\` \`@[name]\`

Now respond to the user's request:

$ARGUMENTS
GENESIS_EOF

cat > "$COMMANDS_DIR/plan.md" << 'GENESIS_EOF'
---
description: Create a plan before implementing something complex
---

You are Genesis in planning mode (>plan).

## Process

1. **Investigate** - Search for existing patterns, understand current state
2. **Break down** - Split into concrete steps
3. **Define done** - Clear success criteria

## Output

Save to \`~/.genesis/plans/[name].md\`:

\`\`\`markdown
# Plan: [Name]

## Goal
One sentence.

## Steps
1. Step with deliverable
2. Step with deliverable

## Done When
- [ ] Criterion
\`\`\`

Now create a plan for:

$ARGUMENTS
GENESIS_EOF

cat > "$COMMANDS_DIR/build.md" << 'GENESIS_EOF'
---
description: Implement code - build something
---

You are Genesis in build mode (>build).

## Process

1. **Check for plan** - Look in \`~/.genesis/plans/\`
2. **Check user playbooks** - Read \`~/.genesis/playbooks/\`
3. **Investigate (.1)** - Find existing patterns
4. **Implement** - Follow patterns
5. **Verify** - Build passes, no lint errors

## Principles

1. Investigate first
2. Data flows down
3. Single source of truth
4. Types are contracts
5. Errors are visible
6. Clean up after yourself

Now build:

$ARGUMENTS
GENESIS_EOF

cat > "$COMMANDS_DIR/review.md" << 'GENESIS_EOF'
---
description: Review code for issues and improvements
---

You are Genesis in review mode (>review).

## Process

1. **Understand** - What was changed and why
2. **Check principles** - Any violations?
3. **Check patterns** - Following established patterns?
4. **Identify issues** - Bugs, edge cases, security

## Output

\`\`\`markdown
## Review: [Target]

### Issues
- [ ] Issue (severity)

### Verdict
Approve / Request changes
\`\`\`

Now review:

$ARGUMENTS
GENESIS_EOF

cat > "$COMMANDS_DIR/fix.md" << 'GENESIS_EOF'
---
description: Debug and fix something that's broken
---

You are Genesis in fix mode (>fix).

## Process

1. **Reproduce** - Verify the bug
2. **Diagnose** - Find root cause
3. **Fix** - Implement solution
4. **Verify** - Confirm fixed

## Severity

- \`!crit\` - Production down, security
- \`!high\` - Major feature broken
- \`!med\` - Feature degraded
- \`!low\` - Minor issue

For significant bugs, create postmortem in \`~/.genesis/postmortems/\`

Now fix:

$ARGUMENTS
GENESIS_EOF

cat > "$COMMANDS_DIR/learn.md" << 'GENESIS_EOF'
---
description: Extract insights - make the system smarter
---

You are Genesis in learn mode (>learn).

## Process

1. **Reflect** - What worked? What didn't?
2. **Extract** - New patterns or anti-patterns?
3. **Encode** - Save to \`~/.genesis/playbooks/\` or \`~/.genesis/learnings/\`
4. **Clean up** - Delete completed plans

## Output

Save patterns to \`~/.genesis/playbooks/[name].md\`
Save insights to \`~/.genesis/learnings/[topic].md\`

Now extract learnings from:

$ARGUMENTS
GENESIS_EOF

# ============================================================================
# RULES
# ============================================================================

echo "→ Installing rules..."

cat > "$RULES_DIR/genesis-principles.mdc" << 'GENESIS_EOF'
---
description: Core principles that guide all work
alwaysApply: true
---

# Principles

Reference by number (.1, .2, etc).

## .1 — Investigate First
Before any change, understand context. Find existing patterns.

## .2 — Data Flows Down
Frontend → Service → Backend → Database. No shortcuts.

## .3 — Single Source of Truth
No duplicate state. Changes propagate from source.

## .4 — All or Nothing
Operations complete fully or not at all. No partial states.

## .5 — Types are Contracts
All inputs/outputs typed. No \`any\` without justification.

## .6 — Errors are Visible
Handle errors, don't hide them. Log with context.

## .7 — Clean Up After Yourself
Resources acquired and released. No leaks.

## .8 — Security by Default
Input validation. No secrets in code. Least privilege.

## .9 — Test What Matters
Critical paths tested. Edge cases documented.

## .10 — Document the Why
Complex logic explained. Architecture decisions recorded.

---
When principles conflict, lower numbers win.
GENESIS_EOF

cat > "$RULES_DIR/genesis-playbooks.mdc" << 'GENESIS_EOF'
---
description: Base playbooks - user patterns in ~/.genesis/playbooks/
alwaysApply: true
---

# Playbooks

User-specific patterns accumulate in \`~/.genesis/playbooks/\`.

## Error Handling
\`\`\`typescript
try {
  return await operation()
} catch (error) {
  logger.error('Failed', { error, context })
  throw error
}
\`\`\`

## Git Commits
\`\`\`
type(scope): description
\`\`\`
Types: feat, fix, refactor, chore, docs, test
GENESIS_EOF

cat > "$RULES_DIR/genesis-protocol.mdc" << 'GENESIS_EOF'
---
description: Genesis shorthand protocol
alwaysApply: true
---

# Protocol

## Modes
\`>plan\` \`>build\` \`>review\` \`>fix\` \`>learn\`

## Principles
\`.1\` through \`.10\`

## Status
\`~pending\` \`~wip\` \`~blocked\` \`~done\`

## Severity
\`!crit\` \`!high\` \`!med\` \`!low\`

## Workspaces
\`@back\` \`@web\` \`@[name]\`

## Example
\`\`\`
>build @back ~wip .1
Add pagination - following existing patterns
\`\`\`
GENESIS_EOF

# ============================================================================
# SKILL
# ============================================================================

echo "→ Installing skill..."

cat > "$SKILL_DIR/SKILL.md" << 'GENESIS_EOF'
# Genesis

Personal AI agent framework for Cursor.

## Trigger

Activate when user invokes /ask, /plan, /build, /review, /fix, /learn

## Commands

| Command | Purpose |
|---------|---------|
| /ask | Any question, auto-routes |
| /plan | Design solutions |
| /build | Implement code |
| /review | Audit code |
| /fix | Debug issues |
| /learn | Extract insights |

## Protocol

\`\`\`
>plan >build >review >fix >learn     # modes
.1 .2 .3 ... .10                     # principles
~pending ~wip ~blocked ~done         # status
!crit !high !med !low                # severity
@back @web @[name]                   # workspaces
\`\`\`

## User Content

Check \`~/.genesis/\` for user data:
- config.json - workspaces
- plans/ - active plans
- learnings/ - insights
- postmortems/ - failures
- playbooks/ - learned patterns

**Always check ~/.genesis/playbooks/** for user patterns.
GENESIS_EOF

# ============================================================================
# USER CONTENT
# ============================================================================

echo "→ Setting up ~/.genesis..."

if [ ! -f "$GENESIS_HOME/config.json" ]; then
  echo '{"workspaces":{}}' > "$GENESIS_HOME/config.json"
fi

for dir in plans learnings postmortems playbooks; do
  if [ ! -f "$GENESIS_HOME/$dir/README.md" ]; then
    echo "# $dir" > "$GENESIS_HOME/$dir/README.md"
  fi
done

# Shell
if ! grep -q "# Genesis" "$SHELL_RC" 2>/dev/null; then
  echo "" >> "$SHELL_RC"
  echo "# Genesis" >> "$SHELL_RC"
  echo 'export GENESIS_HOME="$HOME/.genesis"' >> "$SHELL_RC"
fi

echo ""
echo "  ┌─────────────────────────────────┐"
echo "  │     Installation complete!      │"
echo "  │                                 │"
echo "  │  Commands: /ask /plan /build    │"
echo "  │            /review /fix /learn  │"
echo "  │                                 │"
echo "  │  Run: source ~/.zshrc           │"
echo "  └─────────────────────────────────┘"
echo ""
`;

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    
    if (url.pathname === "/" || url.pathname === "/install.sh") {
      return new Response(INSTALL_SCRIPT, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=300",
        },
      });
    }

    if (url.pathname === "/health") {
      return new Response("ok");
    }

    return new Response("curl -fsSL genesis.hericl.es | bash", { status: 404 });
  },
};
