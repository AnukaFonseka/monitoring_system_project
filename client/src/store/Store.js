import { configureStore } from "@reduxjs/toolkit";
import api from "./api/api";
import { authApi } from "./api/authApi";
import { chartDataApi } from "./api/chartDataApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [chartDataApi.reducerPath]: chartDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      api.middleware,
      authApi.middleware,
      chartDataApi.middleware
    );
  },
});
