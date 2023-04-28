import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import * as stories from "./Template.stories";

const { Default } = composeStories(stories);

describe("Template", () => {
  describe("Default", () => {
    it("should render correctly", () => {
      const { container } = render(<Default />);
      const wrapperElement = screen.getByText(/Template/i);
      expect(container).toMatchSnapshot();
      expect(wrapperElement).toBeInTheDocument();
    });
  });
});
