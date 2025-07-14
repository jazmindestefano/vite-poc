# Contributing Guidelines

Thank you for your interest in contributing to the Booking Design System! This document provides guidelines and instructions for contributing to our component library.

## Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/booking-design-system.git
   cd booking-design-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Start Storybook:
   ```bash
   npm run storybook
   ```

## Project Structure

```
booking-design-system/
├── dist/               # Built distribution files
├── docs/               # Documentation
├── src/
│   ├── components/     # React components
│   │   └── Button/     # Button component
│   │       ├── Button.tsx
│   │       ├── Button.test.tsx
│   │       └── Button.stories.tsx
│   ├── index.ts        # Main entry point
│   └── index.css       # Global styles
├── .storybook/         # Storybook configuration
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Component Development Guidelines

### Creating a New Component

1. Create a new directory under `src/components/` with your component name
2. Create the following files:
   - `ComponentName.tsx`: The component implementation
   - `ComponentName.test.tsx`: Tests for the component
   - `ComponentName.stories.tsx`: Storybook stories

3. Use named exports for your component:
   ```tsx
   // Good
   export const ComponentName = () => { /* ... */ };

   // Avoid
   const ComponentName = () => { /* ... */ };
   export default ComponentName;
   ```

4. Export your component in `src/index.ts`:
   ```tsx
   export { ComponentName } from './components/ComponentName/ComponentName';
   ```

### Component Structure

- Keep components focused on a single responsibility
- Use TypeScript interfaces for props
- Export prop interfaces for consumers
- Use Tailwind CSS for styling

Example:

```tsx
export interface MyComponentProps {
  color?: string;
  // other props
}

export const MyComponent = ({ color = 'yellow-ujv' }: MyComponentProps) => {
  return (
    <div className={`bg-${color}`}>
      {/* component content */}
    </div>
  );
};
```

### Testing

- Write tests for all components using Vitest and React Testing Library
- Test both functionality and accessibility
- Aim for high test coverage

Example:

```tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    // assertions
  });
});
```

### Documentation

- Add JSDoc comments to your components
- Create Storybook stories for all components
- Update the documentation in the `docs/` directory

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Ensure all tests pass: `npm test`
4. Build the library: `npm run build`
5. Submit a pull request with a clear description of the changes

## Versioning

We use Semantic Versioning (SemVer):

- MAJOR version for incompatible API changes
- MINOR version for new functionality in a backward compatible manner
- PATCH version for backward compatible bug fixes

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the best outcome for users of our library
