import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const userRequest = axios.create({
  baseURL: BASE_URL,
});

const publicRequest = axios.create({
  baseURL: BASE_URL,
});

userRequest.interceptors.request.use(
  (config) => {
    const persistRoot = localStorage.getItem("persist:root");
    let TOKEN = "";

    try {
      if (persistRoot) {
        const parsedRoot = JSON.parse(persistRoot);
        const currentUser = parsedRoot.user ? JSON.parse(parsedRoot.user).currentUser : null;
        TOKEN = currentUser ? currentUser.accessToken : '';
      }
    } catch (error) {
      console.error('Parsing error:', error);
    }

    if (TOKEN) {
      config.headers.Authorization = `Bearer ${TOKEN}`;
      console.log('Token:', TOKEN); // Log token for debugging
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { userRequest, publicRequest };
