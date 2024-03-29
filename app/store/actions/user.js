import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interface/api.interface";
import HttpService from "../../services/http.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setToken = async (token) => {
  const authToken = await AsyncStorage.setItem("user", token);
  return authToken;
};

export const loginUser = createAsyncThunk(
  "loginUser",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.login(), data);
      if (response.authtoken) {
        await setToken(response.authtoken);
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "registerUser",
  async ({ data, file }, thunkAPI) => {
    try {
      const response = await HttpService.call(api.register(), data, file);
      if (response.authtoken) {
        await setToken(response.authtoken);
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk("getUser", async (thunkAPI) => {
  try {
    const response = await HttpService.call(api.getUser());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
