import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../../config/colors";
const ListItemSeparator = () => {
  return <View style={styles.separator}></View>;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.light,
  },
});
