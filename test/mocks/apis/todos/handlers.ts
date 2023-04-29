import { RequestHandler, rest } from "msw";
import { getAllTodosExample, getTodoByIdExample } from "./examples";

export const handlers: RequestHandler[] = [
  rest.get("https://jsonplaceholder.typicode.com/todos/", (_, res, ctx) =>
    res(ctx.json(getAllTodosExample)),
  ),
  rest.get(
    "https://jsonplaceholder.typicode.com/todos/:todoId",
    (_, res, ctx) => res(ctx.json(getTodoByIdExample)),
  ),
];
