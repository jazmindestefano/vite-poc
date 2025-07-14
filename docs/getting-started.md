# Getting Started

This guide will help you get started with the Booking Design System component library.

## Installation

Install the package using npm:

```bash
npm install @booking-design-system/vite-poc
```

Or using yarn:

```bash
yarn add @booking-design-system/vite-poc
```

## Setup

### 1. Import the CSS

Import the component library's CSS in your application's entry point:

```jsx
// In your main file (e.g., main.jsx, App.jsx, etc.)
import '@booking-design-system/vite-poc/style.css';
```

### 2. Configure Tailwind CSS (if using Tailwind)

If your project uses Tailwind CSS, you'll need to extend your Tailwind configuration to include our custom colors:

```js
// tailwind.config.js
module.exports = {
  // ... your existing config
  theme: {
    extend: {
      colors: {
        'yellow-ujv': '#767676',
        // Add any other custom colors you need
      },
    },
  },
};
```

## Basic Usage

Import components using named imports:

```jsx
import { Button } from '@booking-design-system/vite-poc';

function App() {
  return (
    <div>
      <Button color="red-500" />
    </div>
  );
}
```

## Using with TypeScript

The library includes TypeScript definitions, so you can enjoy full type checking:

```tsx
import { Button, ButtonProps } from '@booking-design-system/vite-poc';

// TypeScript will validate the props
const MyComponent = () => {
  return <Button color="yellow-ujv" />;
};
```

## Next Steps

- Check out the [Component Usage](./component-usage.md) documentation to learn more about each component.
- See [Custom Tailwind Colors](./tailwind-colors.md) to learn about our color system.
