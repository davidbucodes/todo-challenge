import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import * as stories from "./NotFoundPage.stories";

const { Default } = composeStories(stories);

describe("NotFoundPage", () => {
  describe("Default", () => {
    it("should render correctly", () => {
      const { container } = render(<Default />);
      const wrapperElement = screen.getByText(/Page not found!/i);
      expect(container).toMatchSnapshot();
      expect(wrapperElement).toBeInTheDocument();
    });
  });
});
