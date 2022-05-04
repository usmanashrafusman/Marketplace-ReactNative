import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../actions/user";

const initialState = { user: {} }; // initial state

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
