import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import * as stories from "./IndexPage.stories";

const { Default } = composeStories(stories);

describe("IndexPage", () => {
  describe("Default", () => {
    it("should render correctly", () => {
      const { container } = render(<Default />);
      const wrapperElement = screen.getByText(/IndexPage/i);
      expect(container).toMatchSnapshot();
      expect(wrapperElement).toBeInTheDocument();
    });
  });
});
