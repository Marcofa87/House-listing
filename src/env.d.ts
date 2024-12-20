interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_ANOTHER_ENV_VARIABLE?: string
  readonly VITE_APP_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
