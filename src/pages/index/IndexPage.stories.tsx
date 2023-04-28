import type { Meta, StoryObj } from "@storybook/react";

import IndexPage from ".";

const meta = {
  title: "Page/IndexPage",
  component: IndexPage,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof IndexPage>;

export default meta;
type Story = StoryObj<typeof IndexPage>;

export const Default: Story = {};
