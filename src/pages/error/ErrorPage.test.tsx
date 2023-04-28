import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import * as stories from "./ErrorPage.stories";

const { Default } = composeStories(stories);

describe("ErrorPage", () => {
  describe("Default", () => {
    it("should render correctly", () => {
      const { container } = render(<Default />);
      const wrapperElement = screen.getByText(/An error had occurred!/i);
      expect(container).toMatchSnapshot();
      expect(wrapperElement).toBeInTheDocument();
    });
  });
});
