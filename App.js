import React from "react";
import { Provider } from "react-redux";
import store from "./app/store/index";
import AppLayout from "./app/componenets/AppLayout";

export default function App() {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}
