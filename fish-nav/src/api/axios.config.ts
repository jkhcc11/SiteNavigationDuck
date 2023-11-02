import Axios, { AxiosResponse } from "axios";
import qs from "qs";

export const baseURL = "";

export const CONTENT_TYPE = "Content-Type";

export const FORM_URLENCODED =
  "application/x-www-form-urlencoded; charset=UTF-8";

export const APPLICATION_JSON = "application/json; charset=UTF-8";

export const TEXT_PLAIN = "text/plain; charset=UTF-8";

const service = Axios.create({
  timeout: 10 * 60 * 1000,
  // paramsSerializer: function (params) {
  //   //todo: get序列化数组时 不要带[] 这个
  //   return qs.stringify(params, { arrayFormat: "repeat" });
  // },
});

//请求拦截
service.interceptors.request.use(
  (config) => {
    !config.headers && (config.headers = {});
    if (!config.headers[CONTENT_TYPE]) {
      config.headers[CONTENT_TYPE] = APPLICATION_JSON;
    }
    if (config.headers[CONTENT_TYPE] === FORM_URLENCODED) {
      config.data = qs.stringify(config.data);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

//响应拦截
service.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.status === 200) {
      return response;
    } else {
      throw new Error(response.status.toString());
    }
  },
  (error) => {
    if (import.meta.env.MODE === "development") {
      console.log(error);
    }

    if (error.response && error.response.status === 401) {
      return Promise.reject({ code: 401, errorMsg: "身份认证失效,请重新登录" });
    }

    if (error.response && error.response.status === 403) {
      return Promise.reject({ code: 403, errorMsg: "无权限,请联系管理员" });
    }

    return Promise.reject({ code: 500, errorMsg: "服务器异常，请稍后重试…" });
  }
);

export default service;
