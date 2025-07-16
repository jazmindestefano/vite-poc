import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders correctly', () => {
    render(<Tag label="Test Tag" color="#E1EE32" />);
    const tagElement = screen.getByText('Test Tag');
    expect(tagElement).toBeInTheDocument();
  });

  it('displays the correct label', () => {
    const testLabel = 'Example Label';
    render(<Tag label={testLabel} color="#E1EE32" />);
    expect(screen.getByText(testLabel)).toBeInTheDocument();
  });

  it('has the correct styling', () => {
    render(<Tag label="Styled Tag" color="#E1EE32" />);
    const tagElement = screen.getByText('Styled Tag');
    expect(tagElement).toHaveClass('bg-[#E1EE32]');
    expect(tagElement).toHaveClass('rounded-full');
  });
});
