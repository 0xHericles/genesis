#!/bin/bash

# Genesis Installer

set -e

GENESIS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GENESIS_HOME="$HOME/.genesis"
CURSOR_DIR="$HOME/.cursor"
AGENTS_DIR="$CURSOR_DIR/agents"
COMMANDS_DIR="$CURSOR_DIR/commands"
RULES_DIR="$CURSOR_DIR/rules"
SKILL_DIR="$CURSOR_DIR/skills/genesis-agent"
SHELL_RC="$HOME/.zshrc"

echo "Genesis Installer"
echo "================="
echo ""

# Install agents
echo "Installing agents..."
mkdir -p "$AGENTS_DIR"
cp "$GENESIS_DIR/agents/"*.md "$AGENTS_DIR/"
echo "  → $AGENTS_DIR"
echo "    planner, reviewer, fixer, verifier"

# Install command (just /learn)
echo ""
echo "Installing command..."
mkdir -p "$COMMANDS_DIR"
cp "$GENESIS_DIR/commands/learn.md" "$COMMANDS_DIR/"
echo "  → $COMMANDS_DIR/learn.md"

# Install rules
echo ""
echo "Installing rules..."
mkdir -p "$RULES_DIR"
cp "$GENESIS_DIR/rules/"*.mdc "$RULES_DIR/"
echo "  → $RULES_DIR"

# Install skill
echo ""
echo "Installing skill..."
mkdir -p "$SKILL_DIR"
cp "$GENESIS_DIR/skills/genesis-agent/SKILL.md" "$SKILL_DIR/SKILL.md"
echo "  → $SKILL_DIR"

# Create content directories
echo ""
echo "Setting up ~/.genesis..."
mkdir -p "$GENESIS_HOME/plans"
mkdir -p "$GENESIS_HOME/learnings"
mkdir -p "$GENESIS_HOME/postmortems"
mkdir -p "$GENESIS_HOME/playbooks"

# Copy template READMEs
for dir in plans learnings postmortems playbooks; do
    if [ ! -f "$GENESIS_HOME/$dir/README.md" ]; then
        echo "# $dir" > "$GENESIS_HOME/$dir/README.md"
        echo "" >> "$GENESIS_HOME/$dir/README.md"
        echo "Your $dir accumulate here." >> "$GENESIS_HOME/$dir/README.md"
    fi
done

echo "  → $GENESIS_HOME"

# Create default config if needed
if [ ! -f "$GENESIS_HOME/config.json" ]; then
    cat > "$GENESIS_HOME/config.json" << 'EOF'
{
  "workspaces": {}
}
EOF
    echo "  → Created config.json"
fi

# Shell setup
echo ""
if grep -q "# Genesis" "$SHELL_RC" 2>/dev/null; then
    echo "Shell: already configured"
else
    cat >> "$SHELL_RC" << 'EOF'

# Genesis
export GENESIS_HOME="$HOME/.genesis"
alias g='cd ~/dev/genesis'
EOF
    echo "Shell: added to .zshrc"
fi

echo ""
echo "================="
echo "Install complete!"
echo "================="
echo ""
echo "Agents (auto-delegate):"
echo "  /planner   - Design before building"
echo "  /reviewer  - Audit code (readonly)"
echo "  /fixer     - Debug and fix"
echo "  /verifier  - Validate work (readonly)"
echo ""
echo "Command:"
echo "  /learn     - Extract insights → playbooks"
echo ""
echo "Content (~/.genesis/):"
echo "  plans/       - Your active plans"
echo "  learnings/   - Your insights"
echo "  postmortems/ - Your failure records"
echo "  playbooks/   - Your learned patterns"
echo "  config.json  - Your workspaces"
echo ""
echo "Next: Edit ~/.genesis/config.json to add your workspaces"
echo ""
echo "Run: source ~/.zshrc"
