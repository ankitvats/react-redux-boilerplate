import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    usersReceived: (users, action) => {
      users.list = action.payload;
    },
  },
});

export const { usersReceived } = slice.actions;
export default slice.reducer;
