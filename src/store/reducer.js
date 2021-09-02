import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./users";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"], // reducers
};

const reducer = combineReducers({
  users: userReducer,
});

export default persistReducer(persistConfig, reducer);
