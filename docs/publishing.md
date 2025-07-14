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

## Troubleshooting

### React Version Conflicts

If you're using React 19 and encounter version conflicts like this:

```
Error: Override for react@19.0.0 conflicts with direct dependency
```

Try one of these solutions:

#### Solution 1: Use the resolutions field (Yarn)

In your project's `package.json`, add a resolutions field:

```json
"resolutions": {
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

Then run:

```bash
yarn install
```

#### Solution 2: Use the --force flag (npm)

```bash
npm install jaz-vite-poc --force
```

#### Solution 3: Use the --legacy-peer-deps flag (npm)

```bash
npm install jaz-vite-poc --legacy-peer-deps
```

Import and use:

```jsx
// Import the CSS
import 'jaz-vite-poc/style.css';

// Import components
import { Button } from 'jaz-vite-poc';

function MyComponent() {
  return <Button color="red-500" />;
}
```

## Troubleshooting

### React Version Conflicts

If you see errors like:
```
npm error code EOVERRIDE
npm error Override for react@19.0.0 conflicts with direct dependency
```

Make sure your peer dependencies include the React version used in the target project:

```json
"peerDependencies": {
  "react": "^18.0.0 || ^19.0.0",
  "react-dom": "^18.0.0 || ^19.0.0"
}
```

### Git Issues with npm version

If you see:
```
npm error Git working directory not clean.
```

Either:
1. Commit your changes first:
   ```bash
   git add .
   git commit -m "Update package"
   npm version patch
   ```

2. Or manually update the version in package.json
