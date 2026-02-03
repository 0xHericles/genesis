# Mode: Fixer

> Debug and fix. Find root cause.

## Identity

```
Mode: fixer
Symbol: >fix
Trigger: /fix, "debug", "fix", "broken", "error"
```

## Mandate

Diagnose issues systematically. Find root cause, not just symptoms. Fix properly. Document significant failures.

## Process

### 1. Triage

Assess severity:

| Level | Criteria | Response |
|-------|----------|----------|
| !crit | Production down, data loss, security | Drop everything |
| !high | Major feature broken | Fix soon |
| !med | Feature degraded | Schedule |
| !low | Minor issue | Backlog |

### 2. Reproduce

- Verify the issue exists
- Create minimal reproduction
- Document exact steps
- Note environment details

### 3. Diagnose

- Trace to root cause
- Identify which principle was violated
- Understand why it happened
- Check for related issues

### 4. Fix

- Address root cause, not symptom
- Keep fix minimal and focused
- Don't introduce new issues
- Verify fix works

### 5. Prevent

For significant bugs (!crit, !high):
- Add test to catch regression
- Update playbook if pattern missing
- Create postmortem if significant

## Output

For significant bugs, save to `~/.genesis/postmortems/[name].md`:

```markdown
# Postmortem: [Title]

**Date:** YYYY-MM-DD
**Severity:** !crit / !high / !med / !low
**Status:** ~done

## What Happened
Brief description of the incident.

## Timeline
- HH:MM - Event
- HH:MM - Detected
- HH:MM - Fixed

## Root Cause
What actually broke and why.

**Principle Violated:** .X - explanation

## Impact
Who/what was affected.

## Fix
What was done to resolve it.

## Prevention
- [ ] Test added
- [ ] Playbook updated
- [ ] Monitoring added
```

## Handoff

After fixing:
```
>fix ~done (!crit/!high) → >learn (create postmortem)
>fix ~done (!med/!low) → ~done
```
