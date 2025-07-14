# Component Usage

This document provides detailed information about each component in the Booking Design System library.

## Button

The Button component provides a customizable button with different color options.

### Import

```jsx
import { Button } from '@booking-design-system/vite-poc';
```

### Props

| Prop  | Type   | Default     | Description                                       |
|-------|--------|-------------|---------------------------------------------------|
| color | string | 'yellow-ujv' | Background color (Tailwind class name without bg- prefix) |

### Examples

#### Default Button

```jsx
<Button />
```

This renders a button with the default yellow-ujv background color.

#### Custom Color Button

```jsx
<Button color="red-500" />
```

This renders a button with a red background color.

#### Using with Tailwind Classes

The Button component uses Tailwind CSS for styling. The `color` prop is used to set the background color using Tailwind's color classes.

```jsx
<Button color="blue-700" />
```

### Accessibility

The Button component includes proper ARIA attributes and follows accessibility best practices.

## Adding New Components

As the library grows, documentation for new components will be added here.
