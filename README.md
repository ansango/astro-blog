# Ansango Code Blog: Markdoc

Experimental Markdoc integration.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── content/
        └── docs/
│           └── intro.mdoc
|       └── config.ts
│   └── components/Aside.astro
│   └── layouts/Layout.astro
│   └── pages/index.astro
|   └── env.d.ts
├── astro.config.mjs
├── markdoc.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Markdoc (`.mdoc`) files can be used in content collections. See `src/content/docs/` for an example file.

You can also render Astro components from your Markdoc files using [tags](https://markdoc.dev/docs/tags). See the `markdoc.config.mjs` file for an example configuration.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
