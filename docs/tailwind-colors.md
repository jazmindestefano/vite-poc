# Custom Tailwind Colors

This document explains how the Booking Design System uses custom Tailwind CSS colors and how consumers of the library can integrate these colors into their own projects.

## Our Custom Colors

The Booking Design System includes the following custom colors:

| Color Name | Hex Value | Description |
|------------|-----------|-------------|
| yellow-ujv | #767676   | Primary brand color |

## Using Custom Colors in the Library

Within our component library, we use these custom colors for various components. For example, the Button component uses `yellow-ujv` as its default background color.

```tsx
export const Button = ({ color = 'yellow-ujv' }: ButtonProps) => {
  return (
    <button data-testid="button" className={`bg-${color}`}>
      <p>soy un boton</p>
    </button>
  );
};
```

## Adding Custom Colors to Your Project

If you're using our component library in your project, you'll need to add our custom colors to your Tailwind configuration to ensure they work correctly.

### Step 1: Update Your Tailwind Config

Add our custom colors to your Tailwind configuration file:

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

### Step 2: Use the Custom Colors

Once added to your Tailwind configuration, you can use our custom colors in your own components:

```jsx
// Using in your own components
<div className="bg-yellow-ujv text-white">
  Custom colored div
</div>

// Using with our components
import { Button } from '@booking-design-system/vite-poc';

<Button color="yellow-ujv" />
```

## Color System Guidelines

When extending our color system with your own custom colors, we recommend following these guidelines:

1. Use descriptive names that indicate the color's purpose
2. Maintain consistent naming conventions
3. Consider accessibility and contrast ratios
4. Document new colors for other team members

## Adding New Colors to the Library

If you're contributing to the library and need to add new custom colors:

1. Add the color to `tailwind.config.js`
2. Document the new color in this file
3. Update component defaults if necessary
4. Add examples to Storybook
