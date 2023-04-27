import type { Meta, StoryObj } from "@storybook/react";

import Template from ".";

const meta = {
  title: "Template",
  component: Template,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Template>;

export default meta;
type Story = StoryObj<typeof Template>;

export const Default: Story = {};
