/* eslint-disable prettier/prettier */
const API_URL = "api.nyoka.io";
const PROTOCOL = "https://";
const BASE_URL = `${PROTOCOL}${API_URL}/api`;
const TIMEOUT = 60 * 1000; // 1 min

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

type GetApiConfig = {
  rootPath?: string;
  headers?: object;
};

export const getApiConfig = ({ rootPath = "", headers }: GetApiConfig) => ({
  baseURL: `${BASE_URL}${rootPath}`,
  timeout: TIMEOUT,
  headers: headers || defaultHeaders,
  // withCredentials: true,
});

export const apiConfig = getApiConfig({});
