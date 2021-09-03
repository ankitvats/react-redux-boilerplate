import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import reducer from "./reducer";
import api from "./middleware/api";

// thunk & devtool config is included in toolkit
export default function myStore() {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware({
        // to ignore some warnings with react-persist
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      api,
    ],
  });
}
