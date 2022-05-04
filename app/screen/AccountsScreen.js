import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import {
  Screen,
  ListItem,
  Icon,
  ListItemSeparator,
} from "../componenets/layouts";
import colors from "../config/colors";
import { listings } from "../componenets/dummyData";

const AccountsScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Muhammad Usman"
          subTitle="usman.ashraf033@gmail.com"
          image={require("../assets/user.png")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={listings}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.path)}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#eb2828" />}
      />
    </Screen>
  );
};

export default AccountsScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
