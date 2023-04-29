import { RequestHandler, rest } from "msw";
import { getUserByIdExample } from "./examples";

export const handlers: RequestHandler[] = [
  rest.get(
    "https://jsonplaceholder.typicode.com/users/:userId",
    (_, res, ctx) => res(ctx.json(getUserByIdExample)),
  ),
];
