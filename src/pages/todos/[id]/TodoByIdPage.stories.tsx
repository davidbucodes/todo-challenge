import type { Meta, StoryObj } from "@storybook/react";

import { MemoryRouter, Route, Routes } from "react-router-dom";
import TodoByIdPage from ".";
import { getTodoByIdExample } from "../../../../test/mocks/apis/todos/examples";

const meta = {
  title: "Page/TodoByIdPage",
  component: TodoByIdPage,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TodoByIdPage>;

export default meta;
type Story = StoryObj<typeof TodoByIdPage>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={[`/todos/${getTodoByIdExample.id}`]}>
        <Routes>
          <Route path="/todos/:todoId" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};
