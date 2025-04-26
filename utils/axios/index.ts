import axios from "axios";

import { baseApiURL } from "../constants";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  config.baseURL = baseApiURL;
  config.headers["Content-Type"] = "application/json";
  return config;
});
