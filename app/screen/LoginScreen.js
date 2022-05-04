import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import * as Yup from "yup";
import { AppFormField, SubmitButton, AppForm } from "../componenets/forms";
import { Screen } from "../componenets/layouts";
import { loginUser } from "../store/actions/user";
import { useDispatch, useSelector } from "react-redux";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = () => {
  const dispatch = useDispatch();
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => dispatch(loginUser(values))}
        validationSchema={validationSchema}
      >
        <View style={{ marginTop: "20%" }}>
          <AppFormField
            textContentType="emailAddress"
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            ketboardType="email-address"
            name="email"
          />
          <AppFormField
            textContentType="password"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            secureTextEntry
            name="password"
          />
        </View>

        <View style={{ flex: 1, marginTop: "20%" }}>
          <SubmitButton title="Login" type="primary" />
        </View>
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  screen: {
    padding: 15,
  },
});
