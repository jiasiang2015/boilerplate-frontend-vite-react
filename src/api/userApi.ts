import { Profile } from '@liff/get-profile';

import apiInstance, { AppAxiosConfig } from "@/packages/axios";
import { WrapWithData } from "@/consts/types";
import { AppUserStorage } from "@/lstore";
import { UserDTO, UserInfoDTO } from "./userDto";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace UserApi {
  export function me(config?: AppAxiosConfig) {
    return apiInstance<WrapWithData<UserDTO>>({
      method: "GET",
      url: "/user/self",
      ...config,
    });
  }

  /** 使用者使用 Line 註冊並登入 */
  export async function lineLogin(lineAccessToken: string, profile: Profile) {
    const responseData = (await apiInstance<WrapWithData<UserInfoDTO>>({
      method: "POST",
      url: "/user/line-login",
      data: { access_token: lineAccessToken, profile },
      withoutAuth: true,    
    })).data;
    AppUserStorage.inst().apiToken(responseData.data.api_token);
    return responseData;
  }
}
