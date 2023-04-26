import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo } from "./types";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/todos/",
  }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => ``,
    }),
    getTodoById: builder.query<Todo, number>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetAllTodosQuery, useGetTodoByIdQuery } = todosApi;
