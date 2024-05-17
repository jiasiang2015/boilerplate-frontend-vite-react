/* eslint-disable no-unused-vars */
import { PropsWithChildren, useEffect, useState } from 'react';
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ENV } from '@/consts';
import { AppAxiosError } from './types';
import { AppUserStorage } from '@/lstore';

export * from './types';

const apiInstance = axios.create({
  baseURL: ENV.APP_API_URL,
});

export function AxiosIntercetorProvider(props: PropsWithChildren) {
  const { children } = props;
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    const reqInterceptor = (config: InternalAxiosRequestConfig) => {
      // 如果不需要 Auth 就直接返回
      if (config.withoutAuth) {
        return config;
      }
      // 在每次請求中帶上token
      const token = AppUserStorage.inst().apiToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    };

    const resInterceptor = (response: AxiosResponse) => {
      return response;
    };

    const errInterceptor = (error: AppAxiosError) => {
      if (error.response && error.config) {
        const excludeErrorCodes = error.config.excludeCode ?? [];
        const errorCode         = error.response.data.code;
        
        // 如果是 'all' 就直接 reject 不做而外的處理
        if (excludeErrorCodes === 'all') {
          return Promise.reject(error);
        }

        // 如果是屬於權限錯誤，並且 Token 已經過期，就把使用者導向到 login 畫面
        // if (errorCode === AppErrorCode.UNAUTHORIZED_TOKEN) {
        //   navigate(0);  // refresh
        //   return Promise.reject(error);
        // }

        // 如果沒有設定 excludeCode 或是 excludeCode 不包含這個錯誤碼，就顯示錯誤訊息
        if (excludeErrorCodes.includes(errorCode) === false) {
          // do something with error
        }
      }
      else {
        console.error(error);
      }
      return Promise.reject(error);
    };

    const resInterceptors = apiInstance.interceptors.response.use(resInterceptor, errInterceptor);
    const reqInterceptors = apiInstance.interceptors.request.use(reqInterceptor, errInterceptor);

    setIsSet(true);
    return () => {
      apiInstance.interceptors.response.eject(resInterceptors);
      apiInstance.interceptors.response.eject(reqInterceptors);
    };
  }, []);

  return isSet && children;
}

// eslint-disable-next-line react-refresh/only-export-components
export default apiInstance;

