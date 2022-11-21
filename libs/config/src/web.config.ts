import { IBaseConfig, IConfigEnvironment, base_config } from './base.config';

export type IWebConfig = IBaseConfig;

export const web_config: IWebConfig = {
  ...base_config,
  /** general */
  env: (process.env.NEXT_PUBLIC_ENV as IConfigEnvironment) ?? 'development',
  appname: process.env.NEXT_PUBLIC_APPNAME ?? 'alt-vape',
  host: process.env.NEXT_PUBLIC_HOST ?? 'localhost',
  /** data */
  max_bytes: parseInt(process.env.NEXT_PUBLIC_MAX_BYTES ?? '(2 << 22) * 250'),
  /** api config */
  api_port: parseInt(process.env.NEXT_PUBLIC_API_PORT ?? '3000'),
  api_host: process.env.NEXT_PUBLIC_API_HOST ?? 'localhost',
  api_version: process.env.NEXT_PUBLIC_API_VERSION ?? 'v1',
  /** web config */
  web_port: parseInt(process.env.NEXT_PUBLIC_CLIENT_PORT ?? '3030'),
  web_host: process.env.NEXT_PUBLIC_web_HOST ?? 'localhost',
  /** services */
  // meilisearch_host: process.env.NEXT_PUBLIC_MEILISEARCH_HOST ?? 'http://localhost:7700',
  // meilisearch_public_key: process.env.NEXT_PUBLIC_MEILISEARCH_PUBLIC_KEY ?? '',
  /** cdn */
  files_cdn: process.env.NEXT_PUBLIC_FILES_CDN ?? '',
  images_cdn: process.env.NEXT_PUBLIC_IMAGES_CDN ?? '',
};
