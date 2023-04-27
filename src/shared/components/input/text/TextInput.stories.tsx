import type { Meta, StoryObj } from "@storybook/react";

import TextInput from ".";

const meta = {
  title: "Input/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: { onValueChange: { action: "onValueChange" } },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    id: "id",
  },
};

export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: "Label",
  },
};

export const WithPlaceholder: Story = {
  args: {
    ...Default.args,
    placeholder: "placeholder",
  },
};

export const WithInitialValue: Story = {
  args: {
    ...Default.args,
    initialValue: "initialValue",
  },
};
