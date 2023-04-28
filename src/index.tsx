/// <reference types="vite/client" />
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { router } from "./pages/router";
import { theme } from "./styles/theme.js";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
