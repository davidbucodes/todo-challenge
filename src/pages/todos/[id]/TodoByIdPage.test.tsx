import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { getTodoByIdExample } from "../../../../test/mocks/apis/todos/examples";
import { getUserByIdExample } from "../../../../test/mocks/apis/users/examples";
import * as stories from "./TodoByIdPage.stories";

const { Default } = composeStories(stories);

describe("TodoByIdPage", () => {
  describe("Default", () => {
    it("should render correctly", () => {
      const { container } = render(<Default />);
      const wrapperElement = screen.getByText(/item number/i);
      expect(container).toMatchSnapshot();
      expect(wrapperElement).toBeInTheDocument();
    });

    it("should render id", async () => {
      render(<Default />);
      const idElement = await screen.findByText(getTodoByIdExample.id);
      expect(idElement).toBeInTheDocument();
    });

    it("should render title", async () => {
      render(<Default />);
      const titleElement = await screen.findByText(getTodoByIdExample.title);
      expect(titleElement).toBeInTheDocument();
    });

    it("should render creator", async () => {
      render(<Default />);
      const creatorElement = await screen.findByText(getUserByIdExample.name);
      expect(creatorElement).toBeInTheDocument();
    });
  });
});
