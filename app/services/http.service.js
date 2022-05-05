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
  if (file) {
    return {
      "Content-Type": "multipart/form-data",
      "authorization-token": await getToken(),
    };
  }
  return {
    "Content-Type": "application/json",
    "authorization-token": await getToken(),
  };
};

const call = async (api, data, file) => {
  const headers = await getHeaders(file);
  if (file) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    if (data.image.length) {
      // if (data.image.length > 1) {
      //   const images = [];
      //   data.image.forEach((image, index) => {
      //     const imageObj = {
      //       name: `images0${index}`,
      //       type: "image/jpeg",
      //       uri: image,
      //     };
      //     images.push(imageObj);
      //   });
      //   formData.append("file", images);
      // } else {
      formData.append("file", {
        name: "images",
        type: "image/jpeg",
        uri: data.image[0],
      });
      // }
    }
    data = formData;
  } else {
    const json = JSON.stringify(data);
    data = json;
  }
  if (data) {
    const response = await fetch(api.url, {
      method: api.method.toUpperCase(),
      headers: headers,
      body: data,
    });
    return response.json();
  }
  const response = await fetch(api.url, {
    method: api.method.toUpperCase(),
    headers: headers,
  });
  return response.json();
};

export default {
  call,
};
