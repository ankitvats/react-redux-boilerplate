import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default function configure() {
  return configureStore({
    reducer,
  });
}
