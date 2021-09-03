import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "users",
  initialState: {
    list: [],
    isFetching: false,
    error: "",
  },
  reducers: {
    // actions => action handler (state,action)
    usersRequested: (users, action) => {
      // we can use mutable code here, coz toolkit uses immer library
      users.isFetching = true;
    },

    usersReceived: (users, action) => {
      users.list = action.payload;
      users.isFetching = false;
    },

    usersRequestFailed: (users, action) => {
      users.error = action;
      users.isFetching = false;
    },
  },
});

// console.log(slice);
// {
// actions: {usersRequested: ƒ, usersReceived: ƒ, usersRequestFailed: ƒ}
// caseReducers: {usersRequested: ƒ, usersReceived: ƒ, usersRequestFailed: ƒ}
// name: "users"
// reducer: ƒ (state, action)
// }

const { usersRequested, usersReceived, usersRequestFailed } = slice.actions;
export default slice.reducer;

// action creator
export const fetchUsers = () => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url: "users",
      onStart: usersRequested.type,
      onSuccess: usersReceived.type,
      onError: usersRequestFailed.type,
    })
  );
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
