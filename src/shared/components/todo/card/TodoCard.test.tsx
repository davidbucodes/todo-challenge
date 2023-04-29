import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { Todo } from "src/store/apis/todos/types";
import { theme } from "../../../../styles/theme";
import * as stories from "./TodoCard.stories";

const { Default, Completed, LongTitle, NotCompleted, ShortTitle } =
  composeStories(stories);

describe("TodoCard", () => {
  describe("Default", () => {
    it("should render correctly", () => {
      const { container } = render(<Default />);
      const todo = Default.args.todo as Todo;
      const idElement = screen.getByText(`#${todo.id}`);
      const titleElement = screen.getByText(todo.title);
      expect(container).toMatchSnapshot();
      expect(idElement).toBeInTheDocument();
      expect(titleElement).toBeInTheDocument();
    });
  });

  describe("ShortTitle", () => {
    it("should render correctly", () => {
      const { container } = render(<ShortTitle />);
      const todo = ShortTitle.args.todo as Todo;
      const idElement = screen.getByText(`#${todo.id}`);
      const titleElement = screen.getByText(todo.title);
      expect(container).toMatchSnapshot();
      expect(idElement).toBeInTheDocument();
      expect(titleElement).toBeInTheDocument();
    });
  });

  describe("LongTitle", () => {
    it("should render correctly", () => {
      const { container } = render(<LongTitle />);
      const todo = LongTitle.args.todo as Todo;
      const idElement = screen.getByText(`#${todo.id}`);
      const formattedTitle = `${todo.title.substring(0, 20)}...`;
      const titleElement = screen.getByText(formattedTitle);
      expect(container).toMatchSnapshot();
      expect(idElement).toBeInTheDocument();
      expect(titleElement).toBeInTheDocument();
    });
  });

  describe("NotCompleted", () => {
    it("should render correctly", () => {
      const { container } = render(<NotCompleted />);
      const card = container.firstChild?.firstChild;
      expect(container).toMatchSnapshot();
      expect(card).toHaveStyle({
        "background-color": theme.colors.background.crimson,
      });
    });
  });

  describe("Completed", () => {
    it("should render correctly", () => {
      const { container } = render(<Completed />);
      const card = container.firstChild?.firstChild;
      expect(container).toMatchSnapshot();
      expect(card).toHaveStyle({
        "background-color": theme.colors.background.green,
      });
    });
  });
});
