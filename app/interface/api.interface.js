// export const apiURL = "http://127.0.0.1:5000/api";
const apiURL = "https://evening-sierra-66911.herokuapp.com/api";

export const api = {
  login: () => {
    return {
      url: `${apiURL}/auth/login`,
      method: "post",
    };
  },
  register: () => {
    return {
      url: `${apiURL}/auth/register`,
      method: "post",
    };
  },
};
