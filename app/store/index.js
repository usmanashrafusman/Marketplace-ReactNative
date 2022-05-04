import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./reducers/user-slice";

const reducer = combineReducers({
  user: userSlice,
});

const store = configureStore({ reducer });

export default store;
