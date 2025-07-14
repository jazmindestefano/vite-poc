import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ color }: import('./Button').ButtonProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        color: {
            control: {
                type: string;
            };
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const RedButton: Story;
export declare const BlueButton: Story;
export declare const GreenButton: Story;
