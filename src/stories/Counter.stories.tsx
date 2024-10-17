import type { Meta, StoryObj } from '@storybook/react';

import Counter from './Counter';

const meta = {
  component: Counter,
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};