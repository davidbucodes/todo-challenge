import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import * as stories from "./TemplatePage.stories";

const { Default } = composeStories(stories);

describe("TemplatePage", () => {
  describe("Default", () => {
    it("should render correctly", () => {
      const { container } = render(<Default />);
      const wrapperElement = screen.getByText(/TemplatePage/i);
      expect(container).toMatchSnapshot();
      expect(wrapperElement).toBeInTheDocument();
    });
  });
});
