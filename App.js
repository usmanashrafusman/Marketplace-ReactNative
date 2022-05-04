import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import LoginScreen from "./app/screen/LoginScreen";
import AccountsScreen from "./app/screen/AccountsScreen";
import StackNavigation from "./app/navigation/StackNavigation";
import ImageInputList from "./app/componenets/layouts/ImageInputList";
import { Screen } from "./app/componenets/layouts";
import ListingEditScreen from "./app/screen/ListingEditScreen";
import TabNavigation from "./app/navigation/TabNavigation";
import RegisterScreen from "./app/screen/RegisterScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import store from "./app/store/index";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
