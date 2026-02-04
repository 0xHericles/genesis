# Genesis

Personal AI agent framework for Cursor.

## Trigger

Activate when user invokes:
- `/planner`, `/reviewer`, `/fixer`, `/verifier` (agents)
- `/learn` (command)
- Mentions "genesis", principles, or cross-workspace work

## Locations

```
Source:  ~/dev/genesis           # Framework (git-tracked)
Content: ~/.genesis              # User data (personal)
Cursor:  ~/.cursor/agents/       # Installed agents
         ~/.cursor/commands/     # Installed commands
         ~/.cursor/rules/        # Installed rules
```

## Agents

| Agent | Purpose | Mode |
|-------|---------|------|
| `/planner` | Design and plan before implementing | Read/Write |
| `/reviewer` | Audit code for issues and patterns | Readonly |
| `/fixer` | Debug and fix bugs | Read/Write |
| `/verifier` | Validate completed work | Readonly |

## Command

| Command | Purpose |
|---------|---------|
| `/learn` | Extract insights → playbooks |

## Protocol

Shorthand for efficient communication:

```
>plan >build >review >fix >learn     # modes
.1 .2 .3 .4 .5 .6 .7 .8 .9 .10       # principles
~pending ~wip ~blocked ~done          # status
!crit !high !med !low                 # severity
@back @web @[workspace]               # workspaces
```

## Principles (.1-.10)

1. Investigate first
2. Data flows down
3. Single source of truth
4. All or nothing
5. Types are contracts
6. Errors are visible
7. Clean up after yourself
8. Security by default
9. Test what matters
10. Document the why

## User Content

Check `~/.genesis/` for user-specific data:

```
~/.genesis/
├── config.json    # User's workspaces
├── plans/         # Active plans
├── learnings/     # Extracted insights  
├── postmortems/   # Failure records
└── playbooks/     # Learned patterns (user-specific)
```

**Always check `~/.genesis/playbooks/`** for user-specific patterns before suggesting approaches.

## Workflow

```
/planner → creates plan
    ↓
Main agent builds
    ↓
/reviewer → audits (proactive)
    ↓
/verifier → confirms done
    ↓
/learn → extract insights
```

## Key Behaviors

1. **Before building:** Check ~/.genesis/playbooks/ for user patterns
2. **Before suggesting:** Check if user has learned preferences
3. **After significant work:** Prompt to run /learn
4. **On failures:** Create postmortem, update playbooks
