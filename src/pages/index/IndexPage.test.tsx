import { composeStories } from "@storybook/react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getAllTodosExample } from "../../../test/mocks/apis/todos/examples";
import * as stories from "./IndexPage.stories";

const { Default } = composeStories(stories);

describe("IndexPage", () => {
  describe("Default", () => {
    it("should render correctly", () => {
      const { container } = render(<Default />);
      const wrapperElement = screen.getByText(/Loading.../i);
      expect(container).toMatchSnapshot();
      expect(wrapperElement).toBeInTheDocument();
    });

    it("should render todos", async () => {
      const { container } = render(<Default />);
      const listItems = await screen.findAllByRole("listitem");
      expect(container).toMatchSnapshot();
      expect(listItems).toHaveLength(getAllTodosExample.length);
    });

    it("should render filter todos", async () => {
      const { container } = render(<Default />);
      const filterInput = await screen.findByRole("textbox");

      waitFor(async () => {
        await userEvent.type(filterInput, getAllTodosExample[0].title);
      });
      waitFor(async () => {
        const listItems = await screen.findAllByRole("listitem");
        expect(listItems).toHaveLength(1);
      });

      expect(container).toMatchSnapshot();
    });
  });
});
