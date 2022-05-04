import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "./Icon";
import ListItem from "./ListItem";
import AppText from "./AppText";
import colors from "../../config/colors";
const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 25,
    width: "33%",
  },
  label: {
    marginTop: 5,
    color: colors.medium,
    textAlign: "center",
  },
});
