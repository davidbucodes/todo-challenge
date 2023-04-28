import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { theme } from "../../../../styles/theme";
import * as stories from "./TodoCard.stories";

const { Default, Completed, LongTitle, NotCompleted, ShortTitle } =
  composeStories(stories);

describe("TodoCard", () => {
  describe("Default", () => {
    it("should render correctly", () => {
      render(<Default />);
      const idElement = screen.getByText(`#${Default.args.todo!.id!}`);
      const titleElement = screen.getByText(Default.args.todo!.title!);
      expect(idElement).toBeInTheDocument();
      expect(titleElement).toBeInTheDocument();
    });
  });

  describe("ShortTitle", () => {
    it("should render correctly", () => {
      render(<ShortTitle />);
      const idElement = screen.getByText(`#${ShortTitle.args.todo!.id!}`);
      const titleElement = screen.getByText(ShortTitle.args.todo!.title!);
      expect(idElement).toBeInTheDocument();
      expect(titleElement).toBeInTheDocument();
    });
  });

  describe("LongTitle", () => {
    it("should render correctly", () => {
      render(<LongTitle />);
      const idElement = screen.getByText(`#${LongTitle.args.todo!.id!}`);
      const formattedTitle = `${LongTitle.args.todo!.title!.substring(
        0,
        20
      )}...`;
      const titleElement = screen.getByText(formattedTitle);
      expect(idElement).toBeInTheDocument();
      expect(titleElement).toBeInTheDocument();
    });
  });

  describe("NotCompleted", () => {
    it("should render correctly", () => {
      const { container } = render(<NotCompleted />);
      expect(container.firstChild).toHaveStyle({
        "background-color": theme.colors.background.crimson,
      });
    });
  });

  describe("Completed", () => {
    it("should render correctly", () => {
      const { container } = render(<Completed />);
      expect(container.firstChild).toHaveStyle({
        "background-color": theme.colors.background.green,
      });
    });
  });
});
