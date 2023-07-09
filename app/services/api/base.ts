/* eslint-disable import/no-extraneous-dependencies */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { getApiConfig } from "./config";
import {
  handleCommonError,
  handleCommonSuccess,
  injectToken,
} from "./handlers";

export default abstract class ApiBase {
  protected instance: AxiosInstance;

  constructor(rootPath: string, headers?: object) {
    this.instance = axios.create(getApiConfig({ rootPath, headers }));
    this.initializeInterceptor();
  }

  private initializeInterceptor() {
    this.instance.interceptors.request.use(injectToken, error =>
      Promise.reject(error)
    );
    this.instance.interceptors.response.use(
      handleCommonSuccess,
      handleCommonError
    );
  }

  protected get<T = never, R = AxiosResponse<T>>(
    url?: string,
    config?: AxiosRequestConfig<T>
  ): Promise<R> {
    return this.instance.get<T, R>(url || "", config);
  }

  protected post<T = never, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig<T>
  ): Promise<R> {
    return this.instance.post<T, R>(url, data, config);
  }

  protected put<T = never, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig<T>
  ): Promise<R> {
    return this.instance.put<T, R>(url, data, config);
  }

  protected patch<T = never, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig<T>
  ): Promise<R> {
    return this.instance.patch<T, R>(url, data, config);
  }

  protected delete<T = never, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig<T>
  ): Promise<R> {
    return this.instance.delete<T, R>(url, config);
  }
}
