# Genesis

Personal AI agent framework for Cursor.

## Install

```bash
curl -fsSL genesis.hericl.es | bash
```

## Commands

| Command | Purpose |
|---------|---------|
| `/ask` | Any question (auto-routes) |
| `/plan` | Design solutions |
| `/build` | Implement code |
| `/review` | Audit code |
| `/fix` | Debug and fix |
| `/learn` | Extract insights |

## Protocol

```
>plan >build >review >fix >learn     # modes
.1 .2 .3 ... .10                     # principles
~pending ~wip ~blocked ~done         # status
!crit !high !med !low                # severity
@back @web @[name]                   # workspaces
```

## Principles

| # | Principle |
|---|-----------|
| .1 | Investigate first |
| .2 | Data flows down |
| .3 | Single source of truth |
| .4 | All or nothing |
| .5 | Types are contracts |
| .6 | Errors are visible |
| .7 | Clean up after yourself |
| .8 | Security by default |
| .9 | Test what matters |
| .10 | Document the why |

## Structure

```
~/.cursor/commands/     # Installed commands
~/.cursor/rules/        # Installed rules (auto-applied)
~/.cursor/skills/       # Installed skill

~/.genesis/             # Your data
├── plans/              # Active plans
├── learnings/          # Insights
├── postmortems/        # Failure records
├── playbooks/          # Your learned patterns
└── config.json         # Your workspaces
```

## Self-Learning

The system learns from your work:

1. Use commands → Do your work
2. Run `/learn` → Extract insights
3. Patterns accumulate → `~/.genesis/playbooks/`
4. System improves → Future suggestions use your patterns

## Development

```bash
# Clone
git clone https://github.com/hericlesme/genesis.git

# Local install
./install.sh

# Deploy worker (requires Cloudflare auth)
cd worker && npx wrangler deploy
```

## License

MIT
