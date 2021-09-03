import axios from "axios";
import * as actions from "../api";

// Middleware is created using the curry version of a function with three arguments
// SNA - | store(dispatch,getState) - next - actions |
const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  try {
    const response = await axios.request({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url,
      method,
      data,
    });
    // General
    dispatch(actions.apiCallSuccess(response.data));
    // Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    // General
    dispatch(actions.apiCallFailed(error.message));
    // Specific
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;

// Example action
// const action = {
//   type: "apiCallBegan",
//   payload: {
//     url: "/bugs",
//     method: "get", // any get, post
//     data: {}, // data to be posted to server
//     onSuccess: "bugsReceived", // name of method to be called
//     onError: "apiRequestFailed", // name of method to be called
//   },
// };
