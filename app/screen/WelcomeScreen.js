import React from "react";
import colors from "../config/colors";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { AppButton } from "../componenets/layouts";
const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Want!</Text>
      </View>
      <AppButton
        title="Login"
        size="90%"
        onPress={() => {
          navigation.navigate("Login");
        }}
        type="primary"
      />
      <AppButton
        title="Register"
        size="90%"
        onPress={() => {
          navigation.navigate("Register");
        }}
        type="secondary"
      />
    </ImageBackground>
  );
};
export default WelcomeScreen;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 18,
    color: colors.black,
    fontWeight: "600",
    marginTop: 10,
  },
});
