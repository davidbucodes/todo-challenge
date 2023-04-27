import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as stories from "./TextInput.stories";

const { Default, WithLabel, WithPlaceholder, WithInitialValue } =
  composeStories(stories);

const getTextInput = () => screen.getByRole("textbox");

describe("TextInput", () => {
  describe("Default", () => {
    it("should render correctly", () => {
      render(<Default />);
      const textInput = getTextInput();
      expect(textInput).not.toBeNull();
    });

    describe("onInputValueChanged", () => {
      it("should emit onInputValueChanged event", async () => {
        const onValueChange = jest.fn();
        render(<Default onValueChange={onValueChange} />);
        const textInput = getTextInput();
        const textToType = "text";

        await userEvent.type(textInput, textToType);

        expect(onValueChange).toBeCalledTimes(textToType.length);
        expect(onValueChange).toBeCalledWith(textToType);
      });
    });
  });

  describe("WithLabel", () => {
    it("should render correctly", () => {
      render(<WithLabel />);
      const textInput = getTextInput();
      const textInputLabel = screen.getByText(WithLabel.args.label!);
      expect(textInput).not.toBeNull();
      expect(textInputLabel).not.toBeNull();
    });
  });

  describe("WithPlaceholder", () => {
    it("should render correctly", () => {
      render(<WithPlaceholder />);
      const textInput = getTextInput();
      expect(textInput).not.toBeNull();
    });
  });

  describe("WithInitialValue", () => {
    it("should render correctly", () => {
      render(<WithInitialValue />);
      const textInput = getTextInput();
      expect(textInput).not.toBeNull();
    });
  });
});
