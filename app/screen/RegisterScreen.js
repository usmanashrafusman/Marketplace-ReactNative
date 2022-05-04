import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { View } from "react-native";
import { AppText, Screen } from "../componenets/layouts";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  FormImagePicker,
} from "../componenets/forms";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/actions/user";
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

import colors from "../config/colors";

function RegisterScreen() {
  const dispatch = useDispatch();
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "", image: [] }}
        onSubmit={(values) =>
          dispatch(registerUser({ data: values, file: true }))
        }
        validationSchema={validationSchema}
        enctype="multipart/form-data"
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <View>
          <AppText style={{ color: colors.gray, marginBottom: 2 }}>
            Photo
          </AppText>
          <FormImagePicker name="image" limit={1} />
        </View>
        <SubmitButton title="Register" type="secondary" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
