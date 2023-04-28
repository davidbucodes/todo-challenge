import type { Meta, StoryObj } from "@storybook/react";

import TemplatePage from ".";

const meta = {
  title: "Template/TemplatePage",
  component: TemplatePage,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TemplatePage>;

export default meta;
type Story = StoryObj<typeof TemplatePage>;

export const Default: Story = {};
