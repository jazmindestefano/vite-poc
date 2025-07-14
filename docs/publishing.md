# Publishing to npm

A simple guide to publish your component library to npm.

## Prerequisites

- An npm account (create one at [npmjs.com/signup](https://www.npmjs.com/signup))
- Node.js installed on your machine

## Quick Publishing Steps

### 1. Update React Compatibility

Make sure your package.json has the correct peer dependencies:

```json
"peerDependencies": {
  "react": "^18.0.0 || ^19.0.0",
  "react-dom": "^18.0.0 || ^19.0.0"
}
```

### 2. Update Version Number

Increment the version in package.json:

```json
"version": "0.1.4",
```

Follow semantic versioning:
- Patch (0.1.3 → 0.1.4): Bug fixes
- Minor (0.1.3 → 0.2.0): New features (backward compatible)
- Major (0.1.3 → 1.0.0): Breaking changes

### 3. Build Your Package

```bash
npm run build
```

### 4. Login to npm (if not already logged in)

```bash
npm login
```

### 5. Publish Your Package

```bash
npm publish
```

## Using Your Published Package

Install in another project:

```bash
# Using npm
npm install jaz-vite-poc

# Using yarn
yarn add jaz-vite-poc
```