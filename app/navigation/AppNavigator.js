import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountsScreen from "../screen/AccountsScreen";
import MessagesScreen from "../screen/MessagesScreen";
import ListingEditScreen from "../screen/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import colors from "../config/colors";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderTopColor: "#fff" },
      }}
    >
      <Tab.Screen
        name="Feed"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={FeedNavigator}
      />
      <Tab.Screen
        name="ListingEdit"
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate("ListingEdit")}
            />
          ),
        })}
        component={ListingEditScreen}
      />
      <Tab.Screen
        name="Account"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
