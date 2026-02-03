# Genesis Worker

Cloudflare Worker that serves the genesis install script.

## Install Genesis

```bash
curl -fsSL https://genesis.hericl.es | bash
```

## Endpoints

| Path | Description |
|------|-------------|
| `/` | Install script |
| `/health` | Health check |

## Development

```bash
npm install
npm run dev
```

Deployment is automatic via GitHub Actions on push to `main`.
