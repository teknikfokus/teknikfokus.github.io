# teknikfokus.se

## Project setup
### Prerequisities
Node, Go and pnpm needs to be installed

```
pnpm install
```

### Compiles and hot-reloads for development

```
pnpm run dev
```
Run ui and database separately:
`pnpm run dev:ui` and `pnpm run dev:api`

### Bundles for production

```
pnpm run build
```

### Push to production

Accept a pull request from branch `dev` into `deploy` which will trigger [this workflow](.github/workflows/deploy.yml).

## Backend
There is a folder called pb_data commited to the repo, this is used as test data. Don't push anything in this folder unless intentionally updating the dummy data.

To access the admin dashboard:
Email: it@teknikfokus.se
Password: 1234567980
