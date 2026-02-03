# Genesis Worker

Cloudflare Worker serving the genesis install script.

## Endpoints

| Path | Description |
|------|-------------|
| `/` | Install script |
| `/health` | Health check |

## Usage

```bash
curl -fsSL genesis.hericl.es | bash
```

## Local Development

```bash
npm install
npm run dev
```

## Deploy

Automatic via GitHub Actions on push to main.

Manual:
```bash
npx wrangler login
npx wrangler deploy
```

## Custom Domain Setup

1. Deploy the worker first
2. Cloudflare Dashboard → Workers & Pages → genesis
3. Settings → Triggers → Custom Domains
4. Add: `genesis.hericl.es`
