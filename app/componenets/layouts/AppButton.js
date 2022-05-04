import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../config/colors";

const AppButton = ({ size = "100%", title, type, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[type], width: size }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default AppButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    height: 55,
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
    color: colors.white,
  },
});
