---
description: Extract insights from completed work - make Genesis smarter
---

Extract insights from this session. Make the system smarter over time.

## Process

1. **Reflect** - What worked? What didn't? What patterns emerged?
2. **Extract** - Identify reusable patterns or preferences
3. **Encode** - Save to `~/.genesis/playbooks/` or `~/.genesis/learnings/`
4. **Clean up** - Archive completed plans

## What to Look For

| Signal | Action |
|--------|--------|
| New pattern discovered | Add to `~/.genesis/playbooks/` |
| User preference expressed | Add to playbooks |
| Significant failure occurred | Write postmortem |
| Plan completed | Archive to `~/.genesis/plans/archived/` |

## Playbook Format

Save to `~/.genesis/playbooks/[name].md`:

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

## Learning Format

Save to `~/.genesis/learnings/[topic].md`:

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

Now extract learnings from:

$ARGUMENTS
