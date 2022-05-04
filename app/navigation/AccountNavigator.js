import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagesScreen from "../screen/MessagesScreen";
import AccountsScreen from "../screen/AccountsScreen";
import colors from "../config/colors";
const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.light,
        },
        headerTitleStyle: {
          fontWeight: "500",
          fontSize: 16,
        },
        headerTintColor: colors.secondary,
      }}
    >
      <Stack.Screen name="Account" component={AccountsScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
