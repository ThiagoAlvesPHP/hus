// LIBs
import axios from "axios";

// CONFIG
import { appConfig } from "../config/app";

const api = axios.create({
  baseURL: appConfig.requestUrl,
});

// Set token in the constant
export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const Api = api;
