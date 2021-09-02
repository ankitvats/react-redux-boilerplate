import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const middlewares = [thunk];

// createStore(reducer,applyMiddleware)
// createStore(reducer,compose(mWare,devtool))
export default function configureStore() {
  return createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
