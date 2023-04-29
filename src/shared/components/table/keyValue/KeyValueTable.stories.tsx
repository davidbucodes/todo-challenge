import type { Meta, StoryObj } from "@storybook/react";

import KeyValueTable from ".";
import { getTodoByIdExample } from "../../../../../test/mocks/apis/todos/examples";
import { Todo } from "../../../../store/apis/todos/types";

const meta = {
  title: "Table/KeyValueTable",
  component: KeyValueTable,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof KeyValueTable<Todo>>;

export default meta;
type Story = StoryObj<typeof KeyValueTable<Todo>>;

export const Default: Story = {
  args: {
    data: getTodoByIdExample,
    columns: [
      {
        name: "item number",
        dataKey: "id",
      },
      {
        name: "title",
        dataKey: "title",
      },
    ],
    isLoading: false,
    isError: false,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    isError: true,
  },
};

export const NoDataProvided: Story = {
  args: {
    columns: [
      {
        name: "item number",
        dataKey: "id",
      },
      {
        name: "title",
        dataKey: "title",
      },
    ],
  },
};
