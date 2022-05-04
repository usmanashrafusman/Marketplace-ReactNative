import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
  FormImagePicker,
} from "../componenets/forms";
import useLocation from "../hooks/useLocation";
import { Screen, CategoryPickerItem } from "../componenets/layouts";
import { categories } from "../componenets/dummyData";
import { View } from "react-native";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please upload at least one image"),
});
const ListingEditScreen = () => {
  const location = useLocation();
  return (
    <Screen style={{ padding: 10 }}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          maxLength={8}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
        />
        <AppFormPicker
          columns={3}
          PickerItemComponent={CategoryPickerItem}
          items={categories}
          name="category"
          placeholder="Category"
          icon="apps"
        />
        <AppFormField
          multiline
          noOfLines={5}
          maxLength={255}
          name="description"
          placeholder="Description"
        />

        <View style={{ marginTop: "20%" }}>
          <SubmitButton title="POST" type="primary" />
        </View>
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;
