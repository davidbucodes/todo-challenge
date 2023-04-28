import { Preview } from "@storybook/react";
import { setupWorker } from "msw";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../src/store/store";
import { theme } from "../src/styles/theme";
import { handlers } from "../test/mocks/apis/handlers";

if (typeof global.process === "undefined") {
  const worker = setupWorker(...handlers);
  worker.start({
    onUnhandledRequest: (request, print) => {
      if (request.url.hostname !== "localhost") {
        print.error();
      }
    },
  });
}

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
