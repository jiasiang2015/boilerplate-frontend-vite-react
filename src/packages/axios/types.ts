import { AxiosError } from "axios";

export interface AppErrorResponse {
  code: number;
  message: string;
}

export type AppAxiosError = AxiosError<AppErrorResponse>;

export type AppAxiosConfig = {
  /** 設定這個值將不會被 inteceptor 給攔截住 */
  excludeCode?: (string | number)[] | 'all';

  /** 請求時不需要帶 Auth Token */
  withoutAuth?: boolean;
};
