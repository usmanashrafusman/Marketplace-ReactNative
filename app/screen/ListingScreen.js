import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Screen } from "../componenets/layouts";
import colors from "../config/colors";
import { Card } from "../componenets/layouts";
import { listing } from "../componenets/dummyData";
const ListingScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    top: 10,
    padding: 10,
    backgroundColor: colors.light,
  },
});
