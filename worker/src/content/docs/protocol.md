# Protocol

Shorthand for efficient communication with Genesis.

## Quick Reference

```
>plan >build >review >fix >learn     # modes
.1 .2 .3 .4 .5 .6 .7 .8 .9 .10       # principles
~pending ~wip ~blocked ~done          # status
!crit !high !med !low                 # severity
@back @web @[name]                    # workspaces
```

## Modes

| Symbol | Mode | Purpose |
|--------|------|---------|
| `>plan` | Planner | Design before building |
| `>build` | Builder | Implement code |
| `>review` | Reviewer | Audit code |
| `>fix` | Fixer | Debug issues |
| `>learn` | Learner | Extract insights |

## Principles

| Symbol | Principle |
|--------|-----------|
| `.1` | Investigate First |
| `.2` | Data Flows Down |
| `.3` | Single Source of Truth |
| `.4` | All or Nothing |
| `.5` | Types are Contracts |
| `.6` | Errors are Visible |
| `.7` | Clean Up After Yourself |
| `.8` | Security by Default |
| `.9` | Test What Matters |
| `.10` | Document the Why |

## Status

| Symbol | Meaning |
|--------|---------|
| `~pending` | Not started |
| `~wip` | Work in progress |
| `~blocked` | Waiting on something |
| `~done` | Completed |

## Severity

| Symbol | Level | Response |
|--------|-------|----------|
| `!crit` | Critical | Drop everything |
| `!high` | High | Fix soon |
| `!med` | Medium | Schedule |
| `!low` | Low | Backlog |

## Workspaces

Reference configured workspaces with `@name`:

- `@backend` — Backend workspace
- `@frontend` — Frontend workspace
- `@[custom]` — Any workspace from config

## Examples

```
>build @backend ~wip .1
Add user pagination — investigating existing patterns first
```

```
>fix @frontend !high ~pending
Login button not responding on mobile
```

```
>review ~done
Auth changes approved, no blockers found
```
