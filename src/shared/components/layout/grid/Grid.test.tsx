import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import * as stories from "./Grid.stories";

const { Default } = composeStories(stories);

const getList = () => screen.getByRole("list");
const getListItems = () => screen.getAllByRole("listitem");

describe("Grid", () => {
  describe("Default", () => {
    it("should render correctly", () => {
      const { container } = render(<Default />);
      const list = getList();
      const listItems = getListItems();
      expect(container).toMatchSnapshot();
      expect(list).toBeInTheDocument();
      expect(listItems).toHaveLength(Default.args.items!.length!);
    });
  });
});
