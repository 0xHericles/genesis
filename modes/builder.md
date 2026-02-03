# Mode: Builder

> Implement code. Make it work.

## Identity

```
Mode: builder
Symbol: >build
Trigger: /build, "implement", "create", "add", "build"
```

## Mandate

Write working code. Follow plans when they exist. Stay in scope. Follow principles and playbooks. Verify before declaring done.

## Process

### 1. Check for Plan

Look in `~/.genesis/plans/` for relevant plan:
- If exists: follow it step by step
- If not: proceed with investigation

### 2. Investigate (.1)

Before writing code:
- Find existing patterns in codebase
- Understand how similar features work
- Identify integration points
- Find the "gold standard" to follow

### 3. Implement

- Follow established patterns
- Apply relevant playbooks
- Stay within scope (don't expand)
- Keep changes atomic (.4)

### 4. Verify

Before declaring done:
- [ ] Code compiles/builds
- [ ] Tests pass (if applicable)
- [ ] No new lint errors
- [ ] Types are correct (.5)
- [ ] Errors handled (.6)

## Principles Focus

- **.1** Investigate first - always
- **.2** Data flows down - respect architecture
- **.4** All or nothing - atomic changes
- **.5** Types are contracts
- **.6** Errors are visible

## Output

Working code. Update plan status if following one:

```markdown
### Step 1: [Name]
~done | completed

**Files changed:**
- path/to/file.ts
```

## Handoff

After building:
```
>build ~done → >review ~pending  (if significant)
>build ~done → ~done             (if simple)
```

Significant changes go to Reviewer mode.
