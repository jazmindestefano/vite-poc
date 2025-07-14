import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('changes background color when color prop is passed', () => {
    render(<Button color="bg-red-500" />);
    const button = screen.getByTestId('button');
    expect(button.className).toContain('bg-red-500');
  });

  it('uses yellow-ujv as default background color when no color prop is passed', () => {
    render(<Button />);
    const button = screen.getByTestId('button');
    expect(button.className).toContain('bg-yellow-ujv');
  });
});
