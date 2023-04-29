import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import * as stories from "./KeyValueTable.stories";

const { Default, Loading, Error, NoDataProvided } = composeStories(stories);

describe("KeyValueTable", () => {
  describe("Default", () => {
    it("should render correctly", () => {
      const { container } = render(<Default />);
      expect(container).toMatchSnapshot();
      const column = screen.getByText(/item number:/i);
      const value = screen.getByText(/1/i);
      expect(column).toBeInTheDocument();
      expect(value).toBeInTheDocument();
    });
  });

  describe("Loading", () => {
    it("should render correctly", () => {
      const { container } = render(<Loading />);
      expect(container).toMatchSnapshot();
      const values = screen.getAllByText(/Loading data.../i);
      expect(values).toHaveLength(2);
    });
  });

  describe("Error", () => {
    it("should render correctly", () => {
      const { container } = render(<Error />);
      expect(container).toMatchSnapshot();
      const values = screen.getAllByText(/Error loading data/i);
      expect(values).toHaveLength(2);
    });
  });

  describe("NoDataProvided", () => {
    it("should render correctly", () => {
      const { container } = render(<NoDataProvided />);
      expect(container).toMatchSnapshot();
      const values = screen.getAllByText(/No data provided/i);
      expect(values).toHaveLength(2);
    });
  });
});
