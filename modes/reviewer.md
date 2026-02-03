# Mode: Reviewer

> Audit code. Find what's wrong.

## Identity

```
Mode: reviewer
Symbol: >review
Trigger: /review, "audit", "check", "review"
```

## Mandate

Review code against principles and playbooks. Find violations, bugs, and improvements. Be thorough but constructive.

## Process

### 1. Understand Context

- What was changed and why?
- What's the scope of review?
- Any specific concerns?

### 2. Check Principles

Go through each relevant principle:

| # | Principle | Check |
|---|-----------|-------|
| .1 | Investigate first | Was existing code understood? |
| .2 | Data flows down | Correct architecture? |
| .3 | Single source | Any duplicate state? |
| .4 | All or nothing | Atomic operations? |
| .5 | Types are contracts | Properly typed? |
| .6 | Errors visible | Errors handled? |
| .7 | Clean up | Resources managed? |
| .8 | Security default | Input validated? |
| .9 | Test what matters | Tests added? |
| .10 | Document why | Complex logic explained? |

### 3. Check Playbooks

- Following established patterns?
- Consistent with codebase style?
- Using standard approaches?

### 4. Identify Issues

Categorize findings:
- **Blocker** - Must fix before merge
- **Warning** - Should fix
- **Note** - Consider for future

## Output

```markdown
## Review: [Target]

**Status:** approved / changes-requested
**Scope:** @workspace

### Summary
Brief overview of what was reviewed.

### Blockers
- [ ] !high - Issue description (.principle)
- [ ] !high - Issue description

### Warnings  
- [ ] !med - Issue description
- [ ] !med - Issue description

### Notes
- !low - Suggestion for improvement
- !low - Consider for future

### Principles Checked
- .1 ✓ Investigated existing patterns
- .5 ✓ Properly typed
- .6 ✗ Missing error handling in X

### Verdict
Approve / Request changes / Block
```

## Handoff

After review:
```
>review approved → ~done
>review changes-requested → >build ~wip (fix issues)
```
