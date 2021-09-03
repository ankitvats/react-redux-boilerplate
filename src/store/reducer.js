import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./users";

const reducer = combineReducers({
  users: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"], // reducers
};

export default persistReducer(persistConfig, reducer);
