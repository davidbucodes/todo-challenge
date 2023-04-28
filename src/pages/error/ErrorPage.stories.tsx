import type { Meta, StoryObj } from "@storybook/react";

import ErrorPage from ".";

const meta = {
  title: "Page/ErrorPage",
  component: ErrorPage,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Default: Story = {
  args: {
    error: new Error("Error message"),
  },
};
