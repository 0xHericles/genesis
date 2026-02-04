# Workspaces

Configure your projects for workspace-aware commands.

## Configuration

Edit `~/.genesis/config.json` to add your workspaces:

```json
{
  "workspaces": {
    "backend": {
      "path": "/path/to/backend",
      "type": "backend",
      "language": "python"
    },
    "frontend": {
      "path": "/path/to/frontend",
      "type": "frontend",
      "language": "typescript"
    }
  }
}
```

## Workspace Fields

| Field | Required | Description |
|-------|----------|-------------|
| `path` | Yes | Absolute path to workspace root |
| `type` | No | Category: backend, frontend, mobile, etc. |
| `language` | No | Primary language: typescript, python, etc. |

## Using Workspaces

Reference workspaces with `@name` in your messages:

```
/planner @backend Add caching layer
```

```
/reviewer @frontend check the auth components
```

## Workspace-Scoped Playbooks

Playbooks can be scoped to specific workspaces:

```markdown
# Playbook: Error Handling

**Scope:** @backend

## When to Use
Any API endpoint that can fail.

## Pattern
Use Result types, never throw exceptions...
```

When scoped to a workspace, the playbook only applies when working in that context.

## Multiple Workspaces

Reference multiple workspaces when work spans projects:

```
/planner @backend @frontend Add user authentication
```

## Example Config

```json
{
  "workspaces": {
    "api": {
      "path": "/Users/me/projects/myapp/api",
      "type": "backend",
      "language": "go"
    },
    "web": {
      "path": "/Users/me/projects/myapp/web",
      "type": "frontend",
      "language": "typescript"
    },
    "mobile": {
      "path": "/Users/me/projects/myapp/mobile",
      "type": "mobile",
      "language": "swift"
    },
    "infra": {
      "path": "/Users/me/projects/myapp/infra",
      "type": "infrastructure",
      "language": "terraform"
    }
  }
}
```
