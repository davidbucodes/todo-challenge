import { RequestHandler } from "msw";
import { handlers as todosApiHandlers } from "./todos/handlers";
import { handlers as usersApiHandlers } from "./users/handlers";

export const handlers: RequestHandler[] = [
  ...todosApiHandlers,
  ...usersApiHandlers,
];
