import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getToken = async () => {
  const jwt = await AsyncStorage.getItem("user");
  if (jwt) {
    return jwt;
  }
  return null;
};
const getHeaders = async (file) => {
  if (file)
    return {
      "Content-Type": "multipart/form-data",
    };
  return {
    "Content-Type": "application/json",
  };
};

const transform = (data) => {
  const user = new FormData();
  user.append("name", data.name);
  user.append("email", data.email);
  user.append("password", data.password);
  console.log(data.image[0]);
  if (data.image[0]) {
    user.append("file", {
      name: `images`,
      type: "image/jpeg",
      uri: data.image[0],
    });
  }
  return user;
};

const call = async (api, data, file) => {
  const headers = await getHeaders(file);
  if (data) {
    return axios[api.method](api.url, data, headers, transform(data))
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }
  return axios[api.method](api.url, headers)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export default {
  call,
};
