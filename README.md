# Den Gode Stemning

One-page website for the Danish barbershop quartet Den Gode Stemning, built with [Astro](https://docs.astro.build).

## Project structure

```text
/
├── public/              # favicon
├── src
│   ├── assets/          # hero photo (optimised by Astro at build time)
│   ├── layouts/         # page shell, colours and fonts
│   └── pages/
│       └── index.astro  # the whole site, incl. contact details and YouTube ID
└── package.json
```

## Commands

This project uses [pnpm](https://pnpm.io). All commands are run from the project root:

| Command                 | Action                                        |
| :---------------------- | :-------------------------------------------- |
| `pnpm install`          | Install dependencies                          |
| `pnpm dev`              | Start the dev server at `localhost:4321`      |
| `pnpm build`            | Build the production site to `./dist/`        |
| `pnpm preview`          | Preview the build locally before deploying    |
| `pnpm astro ...`        | Run Astro CLI commands, e.g. `astro check`    |
