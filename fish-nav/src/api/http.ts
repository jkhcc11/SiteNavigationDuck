import { AxiosResponse } from "axios";
import { App } from "vue";
import request from "./axios.config";

export interface HttpOption {
  url: string;
  data?: any;
  method?: string;
  headers?: any;
  beforeRequest?: () => void;
  afterRequest?: () => void;
  onUploadProgress?: (progressEvent: any) => void;
}

//接口返回通用类型
export interface Response<T = any> {
  totalSize: number | 0;
  resultStatus: number;
  errorMsg: string;
  result: T;
  success: boolean;
}

function http<T = any>({
  url,
  data,
  method,
  headers,
  beforeRequest,
  afterRequest,
  onUploadProgress,
}: HttpOption) {
  const successHandler = (res: AxiosResponse<Response<T>>) => {
    //status 是http状态码
    if (res.status == 200) {
      //return res.data
      if (res.data.success) {
        return res.data;
      }

      window.$message.error(res.data.errorMsg);
      throw new Error(res.data.errorMsg || "请求失败");
    }
    throw new Error(res.data.errorMsg || "请求失败，未知异常");
  };
  const failHandler = (error: Response<Error>) => {
    afterRequest && afterRequest();
    window.$message.error(error.errorMsg || "请求失败，未知异常");
    //throw new Error(error.errorMsg || '请求失败，未知异常')
  };
  beforeRequest && beforeRequest();
  method = method || "GET";
  const params = Object.assign(
    typeof data === "function" ? data() : data || {},
    {}
  );

  switch (method) {
    case "GET": {
      return request
        .get(url, { params, headers: headers })
        .then(successHandler, failHandler);
    }
    case "DELETE": {
      return request
        .delete(url, { headers: headers, data: params })
        .then(successHandler, failHandler);
    }
    default: {
      return request
        .post(url, params, {
          headers: headers,
          onUploadProgress: onUploadProgress,
        })
        .then(successHandler, failHandler);
    }
  }
}

export function get<T = any>({
  url,
  data,
  method = "GET",
  headers,
  beforeRequest,
  afterRequest,
}: HttpOption): Promise<Response<T>> {
  return http<T>({
    url,
    method,
    data,
    headers,
    beforeRequest,
    afterRequest,
  });
}

export function post<T = any>({
  url,
  data,
  method = "POST",
  headers,
  beforeRequest,
  afterRequest,
  onUploadProgress,
}: HttpOption): Promise<Response<T>> {
  return http<T>({
    url,
    method,
    data,
    headers,
    beforeRequest,
    afterRequest,
    onUploadProgress,
  });
}

//delete
export function sendDelete<T = any>({
  url,
  data,
  method = "DELETE",
  headers,
  beforeRequest,
  afterRequest,
}: HttpOption): Promise<Response<T>> {
  return http<T>({
    url,
    method,
    data,
    headers,
    beforeRequest,
    afterRequest,
  });
}

/**
 * 下载blob格式文件 仅get
 * @param param0
 * @returns
 */
export function downloadFile({ url, data, headers, afterRequest }: HttpOption) {
  const params = Object.assign(
    typeof data === "function" ? data() : data || {},
    {}
  );
  return request
    .get(url, { params, headers: headers, responseType: "blob" })
    .then(afterRequest)
    .catch((res) => {
      window.$message.error("下载文件异常,请联系管理员");
    });
}

export default {
  get,
  post,
  sendDelete,
  downloadFile,
};
