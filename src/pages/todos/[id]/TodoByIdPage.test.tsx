import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import * as stories from "./TodoByIdPage.stories";

const { Default } = composeStories(stories);

describe("TodoByIdPage", () => {
  describe("Default", () => {
    it("should render correctly", () => {
      const { container } = render(<Default />);
      const wrapperElement = screen.getByText(/TodoByIdPage/i);
      expect(container).toMatchSnapshot();
      expect(wrapperElement).toBeInTheDocument();
    });
  });
});
