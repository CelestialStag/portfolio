export type IConfigEnvironment = 'production' | 'staging' | 'test' | 'development';
export type IConfigLogErrors = true | false;

export type IBaseConfig = {
  /** general */
  env: IConfigEnvironment;
  print_errors: IConfigLogErrors;
  appname: string;
  host: string;
  /** data */
  max_bytes: number;
  /** api config */
  api_port: number;
  api_host: string;
  api_version: string;
  /** cron config */
  cron_port: number;
  cron_host: string;
  cron_version: string;
  /** shop config */
  web_port: number;
  web_host: string;
  /** dashboard config */
  dashboard_port: number;
  dashboard_host: string;
  /** services */
  // meilisearch_host: string;
  // meilisearch_public_key: string;
  /** other */
  images_cdn: string;
  files_cdn: string;
};

export const base_config: IBaseConfig = {
  env: (process.env.ENV as IConfigEnvironment) ?? 'development',
  print_errors: process.env.DEPLOYMENT === 'false' ? false : true,
  appname: process.env.APPNAME ?? 'appname',
  host: process.env.HOST ?? 'localhost',
  /** data */
  max_bytes: parseInt(process.env.MAX_BYTES ?? '(2 << 22) * 250'),
  /** api config */
  api_port: parseInt(process.env.API_PORT ?? '3000'),
  api_host: process.env.API_HOST ?? 'localhost',
  api_version: process.env.API_VERSION ?? 'v1',
  /** cron config */
  cron_port: parseInt(process.env.CRON_PORT ?? '3001'),
  cron_host: process.env.CRON_HOST ?? 'localhost',
  cron_version: process.env.CRON_VERSION ?? 'v1',
  /** shop config */
  web_port: parseInt(process.env.CLIENT_PORT ?? '3030'),
  web_host: process.env.web_HOST ?? 'localhost',
  /** dashboard config */
  dashboard_port: parseInt(process.env.DASHBOARD_PORT ?? '3031'),
  dashboard_host: process.env.DASHBOARD_HOST ?? 'localhost',
  /** services */
  // meilisearch_host: process.env.MEILISEARCH_HOST ?? 'http://localhost:7700',
  // meilisearch_public_key: process.env.MEILISEARCH_PUBLIC_KEY ?? '',
  /** cdn */
  images_cdn: process.env.IMAGES_CDN ?? '',
  files_cdn: process.env.FILES_CDN ?? '',
};
