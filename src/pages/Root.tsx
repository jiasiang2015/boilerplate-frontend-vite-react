import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AxiosIntercetorProvider } from "@/packages/axios";
import { useLiffLogin } from "@/packages/line/login-hook";

import { AppUserContextProvider } from "../store/app-user-context";
import { UserApi, UserDTO } from "../api";

function RootContent() {
  const [userInfo, setUserInfo] = useState<UserDTO | null>(null);
  // const { userInfo, isLiffMounted } = useLiffLogin()

  // 在第一次 Render 時去讀取使用者資訊
  const [isUserMounted, setIsUserMounted] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const result = (await UserApi.me({ excludeCode: 'all' })).data;
        setUserInfo(result.data);
      }
      catch (error) { /* empty */ }
      setIsUserMounted(true);
    })();
  }, []);

  return (
    <AppUserContextProvider userInfo={userInfo}>
      <Outlet />
    </AppUserContextProvider>
  )
}

export default function Root() {
  return (
    <AxiosIntercetorProvider>
      <RootContent />
    </AxiosIntercetorProvider>
  )
} 