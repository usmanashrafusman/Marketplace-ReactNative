import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountsScreen from "../screen/AccountsScreen";
import ListingScreen from "../screen/ListingScreen";
import MessagesScreen from "../screen/MessagesScreen";
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ListingScreen} />
      <Tab.Screen name="Info" component={AccountsScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
