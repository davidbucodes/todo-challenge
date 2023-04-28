import { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>,
  ],
};

export default preview;
