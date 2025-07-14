# Publishing to npm

This guide explains how to publish the Booking Design System component library to npm.

## Prerequisites

1. **npm Account**: You need an npm account. If you don't have one, create it at [npmjs.com/signup](https://www.npmjs.com/signup).

2. **Access to the Organization**: For scoped packages like `@booking-design-system/vite-poc`, you need to be a member of the organization.

## Step 1: Prepare Your Package

Ensure your package.json is properly configured:

```json
{
  "name": "@booking-design-system/vite-poc",
  "version": "0.1.0",
  "files": [
    "dist"
  ],
  "main": "./dist/index.umd.js",
  "module": "./dist/index.es.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.es.js",
      "require": "./dist/index.umd.js",
      "types": "./dist/index.d.ts"
    },
    "./style.css": "./dist/style.css"
  },
  "publishConfig": {
    "access": "public"
  }
}
```

Key points:
- `files`: Specifies which files/directories to include in the published package
- `main`, `module`, `types`: Entry points for different module systems
- `exports`: Provides more granular control over entry points
- `publishConfig`: Sets the package as public (required for scoped packages)

## Step 2: Build Your Package

Before publishing, build your package:

```bash
npm run build
```

This will generate the distribution files in the `dist` directory.

## Step 3: Login to npm

Login to your npm account:

```bash
npm login
```

Follow the prompts to enter your username, password, and email.

## Step 4: Publish Your Package

Publish your package:

```bash
npm publish
```

## Step 5: Updating Your Package

When you need to update your package:

1. Update the version in package.json following semantic versioning:
   - For bug fixes: `npm version patch`
   - For new features (backward compatible): `npm version minor`
   - For breaking changes: `npm version major`

2. Build and publish:
   ```bash
   npm run build
   npm publish
   ```

## Using Named Exports

Our library uses named exports instead of default exports, which provides several advantages:

1. **Better Tree-Shaking**: Bundlers can more easily eliminate unused code.
2. **Consistent Import Syntax**: Users always use the same import pattern.
3. **Better IDE Support**: Provides better autocomplete and refactoring.
4. **Prevents Naming Inconsistencies**: Ensures consistent component naming.

### How to Export Components

When adding new components, follow this pattern:

1. Export your component using named exports:
   ```tsx
   // src/components/NewComponent/NewComponent.tsx
   export interface NewComponentProps {
     // props definition
   }
   
   export const NewComponent = (props: NewComponentProps) => {
     // component implementation
   };
   ```

2. Re-export from the main index.ts file:
   ```tsx
   // src/index.ts
   export { Button } from './components/Button/Button';
   export { NewComponent } from './components/NewComponent/NewComponent';
   ```

This ensures all components are available through the main package entry point.
