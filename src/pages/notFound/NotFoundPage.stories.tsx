import type { Meta, StoryObj } from "@storybook/react";

import NotFoundPage from ".";

const meta = {
  title: "Page/NotFoundPage",
  component: NotFoundPage,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Default: Story = {
  args: {},
};
