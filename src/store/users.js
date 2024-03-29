import axios from "axios";
import { createSelector } from "reselect";

// Action Creators
const FETCH_USER_START = "users/fetchUserStart";
const FETCH_USER_SUCCESS = "users/fetchUserSuccess";
const FETCH_USER_FAILURE = "users/fetchUserFailure";

// Initial State
const INITIAL_STATE = {
  list: [],
  isFetching: false,
  error: "",
};

// Reducer
export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isFetching: false,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}

// Action Creators
export const fetchUserStart = () => ({
  type: FETCH_USER_START,
});

export const fetchUserSuccess = (users) => ({
  type: FETCH_USER_SUCCESS,
  payload: users,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

// Async Action Creator - Using Thunk
export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUserStart());

  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const users = await axios.get(url);
    dispatch(fetchUserSuccess(users.data));
  } catch (err) {
    dispatch(fetchUserFailure(err.message));
  }
};

// Selectors - Using reselect (memoized selectors)
export const getAllUsers = createSelector(
  (state) => state.users, // input
  // the output of this (users) will be passed to next function
  (users) => users.list
);

export const getTop5Users = createSelector(
  (state) => state.users,
  (users) => users.list.slice(0, 5)
);
