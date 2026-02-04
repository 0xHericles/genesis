# Installation

Get Genesis up and running in under a minute.

## Install

```bash
curl -fsSL genesis.hericl.es | bash
```

This installs:

| Component | Location |
|-----------|----------|
| Agents | `~/.cursor/agents/` |
| Command | `~/.cursor/commands/` |
| Rules | `~/.cursor/rules/` |
| Skill | `~/.cursor/skills/genesis-agent/` |
| User data | `~/.genesis/` |

## What Gets Created

### Cursor Config

```
~/.cursor/
├── agents/
│   ├── planner.md
│   ├── reviewer.md
│   ├── fixer.md
│   └── verifier.md
├── commands/
│   └── learn.md
├── rules/
│   ├── genesis-principles.mdc
│   ├── genesis-playbooks.mdc
│   └── genesis-protocol.mdc
└── skills/genesis-agent/
    └── SKILL.md
```

### User Data

```
~/.genesis/
├── config.json      # Your workspaces
├── plans/           # Active plans
├── learnings/       # Extracted insights
├── playbooks/       # Learned patterns
└── postmortems/     # Failure records
```

## After Installation

1. **Restart Cursor** to load the new agents and rules
2. **Configure workspaces** by editing `~/.genesis/config.json`
3. **Start using agents** — try `/planner` in any chat

## Install from Source

```bash
git clone https://github.com/0xHericles/genesis.git
cd genesis
./install.sh
```

## Uninstall

```bash
# Remove Genesis files
rm -rf ~/.cursor/agents/{planner,reviewer,fixer,verifier}.md
rm -rf ~/.cursor/commands/learn.md
rm -rf ~/.cursor/rules/genesis-*.mdc
rm -rf ~/.cursor/skills/genesis-agent
rm -rf ~/.genesis
```
