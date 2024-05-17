import { useCallback, useEffect, useState } from "react";
import liff from "@line/liff";
import { UserApi } from "@/api";
import { ENV } from "@/consts";
import { useAppUserContext } from "@/store";

export function useLiffLogin() {
  const { userInfo, setUserInfo } = useAppUserContext();
  const [isLiffMounted, setIsLiffMounted] = useState<boolean>(false);

  const liffLogin = useCallback(async () => {
    try {
      await liff.init({ liffId: ENV.LINE_LIFF_ID });
    } catch (err) {
      console.error("init liff failed");
    }

    // 檢查是否已經登陸 line liff
    if (!liff.isLoggedIn()) {
      liff.login({ redirectUri: window.location.href });
      return;
    }

    // 使用 liff 的資料並且存入我們自己的後端
    try {
      const accessToken = liff.getAccessToken();
      // 檢查 Access Token
      if (!accessToken) throw Error("Access Token is empty!");
      const [profile, _friend] = await Promise.all([
        liff.getProfile(),
        liff.getFriendship(),
      ]);
      await UserApi.lineLogin(accessToken, profile);

      const userReslut = (await UserApi.me()).data;
      setUserInfo(userReslut.data);
      setIsLiffMounted(true);
    } catch (err) {
      console.error("get profile or friend failed", err);
    }
  }, []);

  /** Mocked 登入 */
  const normalLogin = useCallback(async () => {
    await UserApi.lineLogin("mocked-accessToken", {
      userId: "Bill-line-uid",
      displayName: "Bill",
      pictureUrl: "https://example.com.tw/image1.jpg",
    });
    const userReslut = (await UserApi.me()).data;
    setUserInfo(userReslut.data);
    setIsLiffMounted(true);
  }, []);

  useEffect(() => {
    if (ENV.LINE_LOGIN_MOCK_ENABLE) {
      normalLogin();
    } else {
      liffLogin();
    }
  }, []);

  return { userInfo, isLiffMounted };
}
