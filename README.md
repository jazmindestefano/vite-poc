# Booking Design System - Vite POC

This repository is a proof of concept for using Vite as a bundler for the Booking Design System component library. It demonstrates how to set up a React component library with TypeScript, Tailwind CSS, Storybook, and Jest testing using Vite instead of Rollup.

## Project Purpose

The purpose of this project is to validate the feasibility of using Vite for our component library by:

1. Setting up a minimal project structure
2. Building and publishing a sample component
3. Testing the component inside the OBE project
4. Comparing Vite vs Rollup for component library development

## Features

- ⚡️ **Vite** - Fast development and building
- 🧩 **React** - Component library with React
- 🔧 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📚 **Storybook** - Component documentation and testing
- 🧪 **Jest** - Unit testing
- 📦 **NPM Package** - Publishable as an NPM package

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/booking-design-system-vite-poc.git
cd booking-design-system-vite-poc

# Install dependencies
yarn install
```

### Development

```bash
# Start Storybook for component development
yarn storybook

# Run tests
yarn test
```

### Building

```bash
# Build the library
yarn build
```

## Usage

After installing the package from NPM, you can import components like this:

```jsx
import { Button } from '@booking-design-system/vite-poc';
import '@booking-design-system/vite-poc/style.css'; // Import styles

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
    </div>
  );
}
```

## Project Structure

```
/
├── .storybook/          # Storybook configuration
├── src/
│   ├── components/      # UI components
│   │   ├── Button/      # Sample Button component
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   ├── index.css        # Main CSS file with Tailwind imports
│   └── index.ts         # Main entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Package configuration
```

## Publishing

To publish the package to NPM:

```bash
# Login to NPM
yarn login

# Publish the package
yarn publish
```

## Vite vs Rollup Comparison

### Advantages of Vite

1. **Development Speed**: Vite offers significantly faster development experience with its dev server that leverages native ES modules.
2. **Simplified Configuration**: Vite requires less configuration compared to Rollup, with sensible defaults.
3. **Built-in Features**: Vite comes with built-in support for TypeScript, CSS modules, and other features that require plugins in Rollup.
4. **Hot Module Replacement**: Better HMR support out of the box.
5. **Unified Tool**: Vite can handle both development and production builds, eliminating the need for separate tools.

### Advantages of Rollup

1. **Maturity**: Rollup is more mature and has been used for library bundling for longer.
2. **Fine-grained Control**: Rollup offers more fine-grained control over the bundling process.
3. **Tree Shaking**: While both support tree shaking, Rollup was built with this as a primary focus.

### Conclusion

Vite provides a more modern and streamlined approach to building component libraries with excellent developer experience, while still leveraging Rollup under the hood for production builds. For most component libraries, Vite offers a better developer experience without sacrificing build quality.

## Testing in OBE

After publishing the package, you can test it in the OBE project by:

1. Installing the package:
   ```bash
   yarn add @booking-design-system/vite-poc
   ```

2. Importing and using components:
   ```jsx
   import { Button } from '@booking-design-system/vite-poc';
   import '@booking-design-system/vite-poc/style.css';
   
   // Use the component in your OBE project
   ```

3. Verify that:
   - Styles are correctly applied
   - TypeScript types work properly
   - The component functions as expected
