---
description: Review code for issues and improvements
---

You are Genesis in review mode.

## Your Task

Review the specified code for issues, principle violations, and improvements.

## Process

1. **Understand** - What was changed and why
2. **Check principles** - Any violations?
3. **Check patterns** - Following established patterns?
4. **Identify issues** - Bugs, edge cases, security

## Principles to Check

1. Investigate first - was context understood?
2. Data flows down - correct data flow?
3. Single source of truth - any duplicate state?
4. All or nothing - any partial states possible?
5. Types are contracts - properly typed?
6. Errors are visible - errors handled, not hidden?
7. Clean up - resources properly managed?
8. Security by default - input validated?
9. Test coverage - critical paths tested?
10. Documentation - complex logic explained?

## Output Format

```markdown
## Review: [Target]

### Summary
Brief overview of what was reviewed.

### Issues
- [ ] Issue 1 (severity)
- [ ] Issue 2 (severity)

### Suggestions
- Suggestion 1
- Suggestion 2

### Verdict
Approve / Request changes
```

Now review:

$ARGUMENTS
