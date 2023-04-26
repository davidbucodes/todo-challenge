import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "./types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/users/",
  }),
  endpoints: (builder) => ({
    getUserById: builder.query<User, number>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = usersApi;
