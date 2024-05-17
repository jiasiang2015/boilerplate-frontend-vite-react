/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_URL: string;
  readonly VITE_APP_VEESION: string;

  // URL
  readonly VITE_APP_URL: string;
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_ASSET_URL: string;

  // MISC
  readonly VITE_APP_MOCK_API_ENABLE: boolean | string;

  // LINE
  readonly VITE_LINE_LIFF_ID: string;
  readonly VITE_LINE_LIFF_URL: string;
  readonly VITE_LINE_LOGIN_MOCK_ENABLE: boolean | string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
