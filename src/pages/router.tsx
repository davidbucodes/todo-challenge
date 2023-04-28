import { ErrorBoundary } from "react-error-boundary";
import { Outlet, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error";
import IndexPage from "./index";
import PageNotFound from "./notFound";
import TodoByIdPage from "./todos/[id]";

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
        element: <IndexPage />,
      },
      {
        path: "/todos/:todoId",
        element: <TodoByIdPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
