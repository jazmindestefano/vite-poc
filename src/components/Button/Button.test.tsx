import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('contains the correct text', () => {
    render(<Button />);
    const buttonText = screen.getByText('soy un boton');
    expect(buttonText).toBeInTheDocument();
  });

  it('has a paragraph element inside', () => {
    render(<Button />);
    const paragraph = screen.getByText('soy un boton');
    expect(paragraph.tagName).toBe('P');
  });
});
