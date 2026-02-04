# Commands

Explicit commands you invoke manually.

## Available Commands

| Command | Purpose |
|---------|---------|
| `/learn` | Extract insights from completed work |

## /learn

Extracts patterns and insights from your work, making Genesis smarter over time.

```
/learn from today's work
```

**Process:**

1. Reflect on what worked and what didn't
2. Extract reusable patterns or preferences
3. Save to playbooks or learnings
4. Archive completed plans

### What It Looks For

| Signal | Action |
|--------|--------|
| New pattern discovered | Add to `~/.genesis/playbooks/` |
| User preference expressed | Add to playbooks |
| Significant failure | Create postmortem |
| Plan completed | Archive to `plans/archived/` |

### Playbook Format

```markdown
# Playbook: [Name]

**Added:** YYYY-MM-DD
**Scope:** @workspace or "all"

## When to Use
Describe the situation where this applies.

## Pattern
The code or approach to follow.

## Why
Explanation of why this is preferred.
```

### Learning Format

```markdown
# Learning: [Topic]

**Date:** YYYY-MM-DD

## Context
What we were doing.

## Insight
What we learned.

## Application
How to apply this going forward.
```

## Why Only One Command?

Genesis moved from 6 commands to 1 command + 4 agents:

- **Agents** handle complex, multi-step work with context isolation
- **Commands** are for simple, explicit actions

`/learn` is a command because it's user-initiated, single-purpose, and doesn't need context isolation.
