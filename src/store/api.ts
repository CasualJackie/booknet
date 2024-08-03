import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    prepareHeaders: (headers, { getState }) => {
      const language = (getState() as RootState).app.language;

      headers.set("Accept-Language", language);
      headers.set("Accept", "application/json");

      return headers;
    },
  }),
  endpoints: () => ({}),
});
