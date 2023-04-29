import { Preview } from "@storybook/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../src/store/store";
import { theme } from "../src/styles/theme";
import "../test/setup/browser";

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
    (story) => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{story()}</ThemeProvider>
      </Provider>
    ),
  ],
};

export default preview;
