import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'text' },
      description: 'Background color (Tailwind class name without bg- prefix)',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const RedButton: Story = {
  args: {
    color: 'red-500',
  },
};

export const BlueButton: Story = {
  args: {
    color: 'blue-500',
  },
};

export const GreenButton: Story = {
  args: {
    color: 'green-500',
  },
};
