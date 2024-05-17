import { UserDTO } from '@/api';
import { createStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type AppUserState = {
  userInfo: UserDTO | null;
};

export type AppUserAction = {
  updateUserInfo: (userInfo: UserDTO) => void;
};


// eslint-disable-next-line arrow-body-style
export const createAppUserStore = (userInfo: UserDTO | null) => {
  const DEFAULT_PROPS: AppUserState = {
    userInfo: userInfo,
  };
  return createStore<AppUserState & AppUserAction>()(
    immer((set) => ({
      ...DEFAULT_PROPS,
      updateUserInfo: (newUserInfo: UserDTO) =>
        set((state) => {
          state.userInfo = newUserInfo;
        }),
    })),
  );
};

export type AppUserStore = ReturnType<typeof createAppUserStore>;
