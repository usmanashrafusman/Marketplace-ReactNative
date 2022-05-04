import React from "react";
import { AppPicker } from "../layouts";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
const AppFormPicker = ({
  items,
  name,
  placeholder,
  columns,
  PickerItemComponent,
}) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        columns={columns}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
      ></AppPicker>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
