# kyudaisai-opensource

A minimal SvelteKit 3 and TypeScript app configured for Cloudflare Workers.

## Development

```sh
pnpm install
pnpm dev
```

## Check and build

```sh
pnpm check
pnpm build
pnpm preview
```

`pnpm preview` runs the built worker locally with Wrangler. Deploy with `pnpm exec wrangler deploy`.

## Code quality

```sh
pnpm format
pnpm lint
pnpm verify
```

- [SvelteKit documentation](https://svelte.dev/docs/kit)
- [Cloudflare adapter documentation](https://svelte.dev/docs/kit/adapter-cloudflare)
