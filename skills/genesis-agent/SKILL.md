# Genesis

Personal AI agent framework for Cursor.

## Trigger

Activate when user invokes:
- `/ask`, `/plan`, `/build`, `/review`, `/fix`, `/learn`
- Mentions "genesis", modes, or cross-workspace work

## Locations

```
Source:  ~/dev/genesis           # Framework (git-tracked)
Content: ~/.genesis              # User data (personal)
Cursor:  ~/.cursor/commands/     # Installed commands
         ~/.cursor/rules/        # Installed rules
```

## Commands

| Command | Mode | Purpose |
|---------|------|---------|
| `/ask` | auto | Any question, auto-routes |
| `/plan` | >plan | Design solutions |
| `/build` | >build | Implement code |
| `/review` | >review | Audit code |
| `/fix` | >fix | Debug issues |
| `/learn` | >learn | Extract insights |

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

## Mode Details

Read mode files from `~/dev/genesis/modes/`:
- `planner.md` - How to plan
- `builder.md` - How to build
- `reviewer.md` - How to review
- `fixer.md` - How to fix
- `learner.md` - How to learn

## Workflow

```
>plan ~done
    ↓
>build ~wip → ~done
    ↓
>review (if significant)
    ↓
>learn (extract insights)
    ↓
Update ~/.genesis/playbooks/ with new patterns
```

## Key Behaviors

1. **Before building:** Check ~/.genesis/playbooks/ for user patterns
2. **Before suggesting:** Check if user has learned preferences
3. **After significant work:** Prompt to run /learn
4. **On failures:** Create postmortem, update playbooks
