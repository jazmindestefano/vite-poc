# How to Test Changes Locally

## Prerequisites

- Yalc installed globally

```bash
npm install -g yalc
```

## Steps

### In Design System:

```bash
npm run build
yalc publish --push
```

### In booking-engine-widget/ (Next.js):

```bash
yalc add jaz-vite-poc
yarn install
```

## For later updates (after code changes in Design System):

### In Design System:

```bash
npm run build
yalc push
```

No need to repeat `yalc add jaz-vite-poc`.

---------

Para remover una instancia de un paquete instalado con yalc, usás:

```bash
yalc remove jaz-vite-poc
```

Esto hace:

- Elimina el paquete jaz-vite-poc de node_modules
- Lo elimina también de tu package.json

✅ Limpia el link simbólico hacia el store local de yalc

🧼 Luego de `yalc remove jaz-vite-poc`, hacé:

```bash
yarn install
```

Así se actualiza tu yarn.lock y se elimina cualquier rastro del paquete local.


## npm/yarn link, another option

### In Design System:

```bash
npm run build
npm link
```

### In booking-engine-widget/ (Next.js):

```bash
yarn link "jaz-vite-poc"
yarn install
```

## For later updates (after code changes in Design System):

### In Design System:

```bash
npm run build
npm link
```

### In booking-engine-widget/ (Next.js):

```bash
yarn link "jaz-vite-poc"
yarn install
```