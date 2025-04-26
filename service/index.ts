import { type AxiosRequestConfig } from "axios";

import { Plant } from "@/types/Plant";

export interface IRequestPromise<T = any> extends Promise<IRequestResponse<T>> {}

export interface IRequestResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}
export interface IRequestInstance {
  (config: any): IRequestPromise;
  (url: string, config?: any): IRequestPromise;
  request<T = any>(config: any): IRequestPromise<T>;
}
export interface IRequestOptions extends AxiosRequestConfig {
  loading?: boolean;
  showError?: boolean;
  security?: Record<string, "md5" | "sha1" | "aes" | "des">;
  withAuthorization?: boolean;
}
export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}
export interface ServiceOptions {
  axios?: IRequestInstance;
  loading: boolean;
  showError: boolean;
}
export const serviceOptions: ServiceOptions = {
  loading: false,
  showError: false,
};
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  } else {
    throw new Error("Axios Injection Error");
  }
}
export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = {
    loading: serviceOptions.loading,
    showError: serviceOptions.showError,
    ...options,
    method,
    url,
  };
  configs.headers = {
    ...options.headers,
    "Content-Type": contentType,
  };
  return configs;
}
export const basePath = "";

export class Plants {
  static getAllPlants(options: IRequestOptions = {}): Promise<Plant[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/getAllPlants";

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options);

      axios(configs, resolve, reject);
    });
  }
  static getPlantById(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Plant> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/getPlantById";

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options);
      configs.params = { id: params["id"] };

      axios(configs, resolve, reject);
    });
  }
  static removePlantById(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Plant> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/removePlantById";

      const configs: IRequestConfig = getConfigs("delete", "application/json", url, options);
      configs.params = { id: params["id"] };

      axios(configs, resolve, reject);
    });
  }
}
