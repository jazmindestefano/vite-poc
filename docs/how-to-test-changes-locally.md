# How to Test Changes Locally

### In Design System:

```bash
yarn build
yarn link
```

This registers a link for your package.

### In booking-engine-widget/ (Next.js):

```bash
yarn link "jaz-vite-poc"
```

## For later updates (after code changes in Design System) repeat the same procedure

This unregisters the link for your package.

### In Design System:

```bash
yarn unlink
```

### In booking-engine-widget/ (Next.js):

```bash
yarn unlink "jaz-vite-poc"
```