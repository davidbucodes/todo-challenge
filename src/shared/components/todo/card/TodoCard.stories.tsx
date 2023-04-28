import type { Meta, StoryObj } from "@storybook/react";

import TodoCard from ".";
import { getTodoByIdExample } from "../../../../store/apis/todos/examples";

const meta = {
  title: "Todo/TodoCard",
  component: TodoCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TodoCard>;

export default meta;
type Story = StoryObj<typeof TodoCard>;

export const Default: Story = {
  args: {
    todo: getTodoByIdExample,
  },
};

export const Completed: Story = {
  args: {
    todo: { ...getTodoByIdExample, completed: true },
  },
};

export const NotCompleted: Story = {
  args: {
    todo: { ...getTodoByIdExample, completed: false },
  },
};

export const ShortTitle: Story = {
  args: {
    todo: { ...getTodoByIdExample, title: "short title" },
  },
};

export const LongTitle: Story = {
  args: {
    todo: { ...getTodoByIdExample, title: "long title long title long title" },
  },
};
