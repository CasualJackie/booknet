import { configureStore } from "@reduxjs/toolkit";
import app from "./app/reducer";
import menu from "./menu/reducer";

import { api } from "./api";

const rootReducer = { [api.reducerPath]: api.reducer, app, menu };

// `initStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
const initStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export const store = initStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore["dispatch"];
