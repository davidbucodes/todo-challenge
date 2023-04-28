import { ErrorBoundary } from "react-error-boundary";
import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../app";
import ErrorPage from "./error";
import PageNotFound from "./notFound";

export const ErrorBoundaryLayout = () => (
  <ErrorBoundary FallbackComponent={ErrorPage}>
    <Outlet />
  </ErrorBoundary>
);

export const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
