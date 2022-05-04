import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../layouts/AppText";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: { color: "red", marginLeft: 10, fontSize: 15 },
});
