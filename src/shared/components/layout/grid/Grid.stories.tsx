import type { Meta, StoryObj } from "@storybook/react";

import Grid from ".";
import { getAllTodosExample } from "../../../../store/apis/todos/examples";
import { Todo } from "../../../../store/apis/todos/types";
import TodoCard from "../../todo/card";

const meta = {
  title: "Layout/Grid",
  component: Grid<Todo>,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Grid<Todo>>;

export default meta;
type Story = StoryObj<typeof Grid<Todo>>;

export const Default: Story = {
  args: {
    items: getAllTodosExample,
    itemRenderer: (todo) => <TodoCard todo={todo} />,
  },
};
