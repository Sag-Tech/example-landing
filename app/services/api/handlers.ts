/* eslint-disable security/detect-possible-timing-attacks */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InternalAxiosRequestConfig } from "axios";
// import StorageService from "app/services/StorageService";
// import { senNotificationError } from "app/services/Notifications";
// import authContextRef from "app/providers/Auth/AuthContextRef";

// const getErrors = (errors: string | string[]): void => {
//   const parsedErrors = typeof errors === "string" ? JSON.parse(errors) : errors;

//   if (Array.isArray(parsedErrors)) {
//     parsedErrors.forEach((error: string): void => {
//       senNotificationError(error);
//     });
//   }
// };

export const handleCommonSuccess = (response: any) =>
  Promise.resolve(response.data);

export const handleCommonError = (error: any) => {
  const { response } = error;

  // if (response) {
  //   if (!response.data) {
  //     senNotificationError(response.statusText || "Unknown Error");
  //   } else if (response.status === 500) {
  //     senNotificationError("Server error (500)");
  //   } else if (response.status === 401 || response.status === 403) {
  //     senNotificationError(response.statusText || "Token error");
  //     authContextRef.current?.signOut();
  //   } else {
  //     getErrors(response.data.errors);
  //   }
  // } else {
  //   senNotificationError("Network Error");
  // }

  return Promise.reject(response);
};

export const injectToken = (
  config: InternalAxiosRequestConfig<any>
): InternalAxiosRequestConfig<any> => {
  try {
    // const { token } = StorageService;

    // if (token !== null) {
    //   (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
    // }

    return config;
  } catch (error) {
    throw new Error(String(error));
  }
};
