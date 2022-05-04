import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../layouts/AppButton";

const SubmitButton = ({ title, type }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} type={type} onPress={handleSubmit} />;
};

export default SubmitButton;
