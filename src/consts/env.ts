// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ENV {
  export const APP_NAME = import.meta.env.VITE_APP_NAME;
  export const APP_ENV = import.meta.env.VITE_APP_ENV;
  export const APP_VERSION = import.meta.env.VITE_APP_VEESION;

  // URL
  export const APP_URL = import.meta.env.VITE_APP_URL;
  export const APP_ASSET_URL = import.meta.env.VITE_APP_ASSET_URL;
  export const APP_API_URL = import.meta.env.VITE_APP_API_URL;

  // MISC
  export const APP_MOCK_API_ENABLE = import.meta.env.VITE_APP_MOCK_API_ENABLE === "true";

  // LINE
  export const LINE_LIFF_ID = import.meta.env.VITE_LINE_LIFF_ID;
  export const LINE_LIFF_URL = import.meta.env.VITE_LINE_LIFF_URL;
  export const LINE_LOGIN_MOCK_ENABLE = import.meta.env.VITE_LINE_LOGIN_MOCK_ENABLE === "true";
}
