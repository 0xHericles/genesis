/**
 * Install script that fetches from GitHub
 * No more duplicating content!
 */
export const INSTALL_SCRIPT = `#!/bin/bash
# Genesis Installer
# curl -fsSL genesis.hericl.es | bash

set -e

REPO="0xHericles/genesis"
BRANCH="main"
RAW="https://raw.githubusercontent.com/$REPO/$BRANCH"

GENESIS_HOME="$HOME/.genesis"
CURSOR_DIR="$HOME/.cursor"
AGENTS_DIR="$CURSOR_DIR/agents"
COMMANDS_DIR="$CURSOR_DIR/commands"
RULES_DIR="$CURSOR_DIR/rules"
SKILL_DIR="$CURSOR_DIR/skills/genesis-agent"

echo ""
echo "  ┌─────────────────────────────────┐"
echo "  │       Genesis Installer         │"
echo "  └─────────────────────────────────┘"
echo ""

# Create directories
mkdir -p "$AGENTS_DIR" "$COMMANDS_DIR" "$RULES_DIR" "$SKILL_DIR"
mkdir -p "$GENESIS_HOME/plans" "$GENESIS_HOME/learnings" "$GENESIS_HOME/postmortems" "$GENESIS_HOME/playbooks"

# Download agents
echo "→ Installing agents..."
curl -fsSL "$RAW/agents/planner.md" -o "$AGENTS_DIR/planner.md"
curl -fsSL "$RAW/agents/reviewer.md" -o "$AGENTS_DIR/reviewer.md"
curl -fsSL "$RAW/agents/fixer.md" -o "$AGENTS_DIR/fixer.md"
curl -fsSL "$RAW/agents/verifier.md" -o "$AGENTS_DIR/verifier.md"
echo "  planner, reviewer, fixer, verifier"

# Download command
echo "→ Installing command..."
curl -fsSL "$RAW/commands/learn.md" -o "$COMMANDS_DIR/learn.md"
echo "  /learn"

# Download rules
echo "→ Installing rules..."
curl -fsSL "$RAW/rules/genesis-principles.mdc" -o "$RULES_DIR/genesis-principles.mdc"
curl -fsSL "$RAW/rules/genesis-playbooks.mdc" -o "$RULES_DIR/genesis-playbooks.mdc"
curl -fsSL "$RAW/rules/genesis-protocol.mdc" -o "$RULES_DIR/genesis-protocol.mdc"
echo "  principles, playbooks, protocol"

# Download skill
echo "→ Installing skill..."
curl -fsSL "$RAW/skills/genesis-agent/SKILL.md" -o "$SKILL_DIR/SKILL.md"
echo "  genesis-agent"

# Setup user content
echo "→ Setting up ~/.genesis..."
if [ ! -f "$GENESIS_HOME/config.json" ]; then
  echo '{"workspaces":{}}' > "$GENESIS_HOME/config.json"
fi

for dir in plans learnings postmortems playbooks; do
  if [ ! -f "$GENESIS_HOME/$dir/README.md" ]; then
    echo "# $dir" > "$GENESIS_HOME/$dir/README.md"
  fi
done

# Shell setup
SHELL_RC="$HOME/.zshrc"
if ! grep -q "# Genesis" "$SHELL_RC" 2>/dev/null; then
  echo "" >> "$SHELL_RC"
  echo "# Genesis" >> "$SHELL_RC"
  echo 'export GENESIS_HOME="$HOME/.genesis"' >> "$SHELL_RC"
fi

echo ""
echo "  ┌─────────────────────────────────┐"
echo "  │     Installation complete!      │"
echo "  │                                 │"
echo "  │  Agents: /planner /reviewer     │"
echo "  │          /fixer /verifier       │"
echo "  │  Command: /learn                │"
echo "  │                                 │"
echo "  │  Run: source ~/.zshrc           │"
echo "  └─────────────────────────────────┘"
echo ""
`;
