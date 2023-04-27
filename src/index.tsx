/// <reference types="vite/client" />
import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import App from "./app.js";
import { theme } from "./styles/theme.js";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
