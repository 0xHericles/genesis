# Agents

Specialized subagents that auto-delegate or invoke explicitly.

## Available Agents

| Agent | Purpose | Mode |
|-------|---------|------|
| `/planner` | Design and plan before implementing | Read/Write |
| `/reviewer` | Audit code for issues, security, patterns | Readonly |
| `/fixer` | Debug and fix bugs | Read/Write |
| `/verifier` | Validate completed work | Readonly |

## Planner

Invoked when tasks are complex, ambiguous, or need architectural decisions.

```
/planner Add caching layer to the API
```

**Process:**

1. Investigate existing code and patterns
2. Analyze requirements and constraints
3. Design step-by-step implementation plan
4. Define success criteria

**Output:** Saves plan to `~/.genesis/plans/[name].md`

## Reviewer

Audits code against principles and playbooks. Runs readonly — can't modify files.

```
/reviewer check the auth changes
```

**Checks:**

- Principle violations (.1 through .10)
- Security issues
- Pattern consistency with playbooks
- Error handling
- Type safety

**Output:** Verdict (approved/changes-requested) with categorized findings

## Fixer

Debugs issues systematically, finds root cause, fixes properly.

```
/fixer Login returning 500 error
```

**Process:**

1. Triage severity (!crit, !high, !med, !low)
2. Reproduce the issue
3. Diagnose root cause
4. Apply minimal fix
5. Prevent recurrence (tests, postmortem)

**Output:** For significant bugs, creates postmortem at `~/.genesis/postmortems/`

## Verifier

Validates that work claimed as complete actually works. Runs readonly.

```
/verifier confirm the feature works
```

**Checks:**

- Implementation exists and is functional
- Happy path works
- Edge cases handled
- Tests pass and are meaningful
- "Done When" criteria from plan are met

**Output:** Verification status (verified/incomplete/failed) with details

## Auto-Delegation

Agents can be triggered automatically based on context:

- **Planner** — Complex/ambiguous tasks
- **Reviewer** — After code changes (proactive)
- **Fixer** — When errors occur
- **Verifier** — After tasks marked done

Or invoke explicitly with `/agent-name`.
