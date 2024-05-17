import { PropsWithChildren, createContext, useCallback, useContext, useRef } from 'react';
import { useStore } from 'zustand';
import { AppUserStore, createAppUserStore } from './app-user-store';
import { UserApi, UserDTO } from '@/api';

const AppContext = createContext<AppUserStore | null>(null);

export function useAppUserContext() {
  const store = useContext(AppContext);
  if (!store) throw new Error('Missing AppUserContextProviderProps.Provider in the tree');

  const updateUserInfoState = useStore(store, (state) => state.updateUserInfo);
  const userInfo =  useStore(store, (state) => state.userInfo);

  const updateUserInfo = useCallback(async () => {
    try {
      const result = (await UserApi.me()).data;
      updateUserInfoState(result.data);
    } catch (e) {
      console.log(e);
    }
  }, [updateUserInfoState]);

  const setUserInfo = useCallback(async (data: UserDTO) => {
    updateUserInfoState(data);
  }, [updateUserInfo]);

  return { userInfo, setUserInfo, updateUserInfo };
}

interface AppUserContextProviderProps extends PropsWithChildren {
  userInfo: UserDTO | null,
}
export function AppUserContextProvider(props: AppUserContextProviderProps) {
  const { userInfo, children } = props;

  const storeRef = useRef<AppUserStore>();
  if (!storeRef.current) {
    storeRef.current = createAppUserStore(userInfo);
  }

  return <AppContext.Provider value={storeRef.current}>{children}</AppContext.Provider>;
}
