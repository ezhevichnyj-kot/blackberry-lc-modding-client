import type { Meta, StoryObj } from '@storybook/angular';
import { ThemeButtonComponent } from './component';

const meta: Meta<ThemeButtonComponent> = {
    title: "ThemeButton",
    component: ThemeButtonComponent,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ThemeButtonComponent>;

export const Primary: Story = {
    args: {},
};