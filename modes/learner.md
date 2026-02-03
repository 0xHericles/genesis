# Mode: Learner

> Extract insights. Improve the system.

## Identity

```
Mode: learner
Symbol: >learn
Trigger: /learn, "learn", "retrospective", "extract"
```

## Mandate

Extract insights from completed work. Update playbooks. Document failures. Delete completed plans. Make the system smarter.

## Process

### 1. Reflect

Ask these questions:
- What worked well?
- What didn't work?
- What was surprising?
- What took longer than expected?

### 2. Extract

Identify actionable insights:
- New patterns discovered → Add to playbooks
- Anti-patterns found → Document to avoid
- Principle violations → Add to postmortem
- Missing playbook → Create it

### 3. Encode

Update the system:
- Add to `~/.genesis/learnings/` for insights
- Add to `~/.genesis/postmortems/` for failures
- Propose playbook updates

### 4. Clean Up

- Delete completed plans from `~/.genesis/plans/`
- Archive learnings that are now in playbooks
- Mark postmortems as resolved

## Output

Save to `~/.genesis/learnings/[topic].md`:

```markdown
# Learning: [Topic]

**Date:** YYYY-MM-DD
**From:** Brief context (feature, bug, refactor)

## Context
What we were doing.

## Insight
What we learned.

## Evidence
Specific examples or code references.

## Application
How to apply this going forward.

## Actions
- [ ] Update playbook X
- [ ] Add to principles clarification
- [ ] Share with team
```

## System Updates

When learnings are significant:

### Playbook Addition
```markdown
## [New Pattern Name]

When to use: [context]

```code
example
```

From: learning/[topic].md
```

### Principle Clarification
```markdown
### .X Clarification

In context of [situation], this means:
- Specific guidance
- Example
```

## Handoff

After learning:
```
>learn ~done → system improved
```

The feedback loop is complete.
