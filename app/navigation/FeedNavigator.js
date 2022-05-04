import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "../screen/ListingScreen";
import ListingDetailsScreen from "../screen/ListingDetailsScreen";
import colors from "../config/colors";
const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.light,
        },
        headerTitleStyle: {
          fontWeight: "500",
          fontSize: 16,
        },
        headerTintColor: colors.primary,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Listings" component={ListingScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
