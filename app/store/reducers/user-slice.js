import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, getUser } from "../actions/user";

const initialState = { user: null }; // initial state

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
