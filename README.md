## Add Integrations and deployment

Use the `yarn qwik add` command to add additional integrations. Some examples of integrations include: Cloudflare, Netlify or Express server, and the Static Site Generator (SSG)

```shell
yarn qwik add # or `yarn qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). During development, the `dev` command will server-side render (SSR) the output.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.

```shell
yarn preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code.

```shell
yarn build # or `yarn build`
```

## Static Site Generator (Node.js)

```
yarn build.server
```
