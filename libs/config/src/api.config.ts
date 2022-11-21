import { IBaseConfig, base_config } from './base.config';

export type IBaseApps = 'epos-webhooks';

export type IAPIConfig = IBaseConfig & {
  /** data */
  data_dir: string;
  /** crypt */
  salt_rounds: number;
  encryption_key: string;
  session_keys: string[];
  /** database */
  database_schema: string;
  mysql_string: string;
  mysql_root_string: string;
  mongo_string: string;
  mongo_root_string: string;
  redis_string: string;
  // meilisearch_host: string;
  // meilisearch_private_key: string;
  // meilisearch_public_key: string;
  /** cdn */
  files_cdn: string;
  images_cdn: string;
  s3_endpoint: string;
  s3_bucket_files: string;
  s3_bucket_images: string;
  s3_region: string;
  s3_access_key: string;
  s3_secret_key: string;
};

export const api_config: IAPIConfig = {
  ...base_config,
  /** data */
  data_dir: process.env.DATA_DIR ?? '/tmp/my-app/data',
  /** crypt */
  salt_rounds: parseInt(process.env.SALT_ROUNDS ?? '14'),
  encryption_key: process.env.ENCRYPTION_KEY ?? 'super-secret-key',
  session_keys: JSON.parse(process.env.SESSION_KEYS ?? '["super-duper-secret-key", "even-more-secret-key"]'),
  /** database */
  database_schema: process.env.DATABASE_SCHEMA ?? 'my-app',
  // mysql
  mysql_string: process.env.MYSQL_CONNECTION_STRING ?? 'mysql://api-service:root@localhost:5432/my-app',
  mysql_root_string: process.env.MYSQL_ROOT_STRING ?? 'mysql://api-service:root@localhost:5432/my-app',
  // mongo
  mongo_string: process.env.MONGO_CONNECTION_STRING ?? 'mongodb://localhost:27017/my-app',
  mongo_root_string: process.env.MONGO_ROOT_CONNECTION_STRING ?? 'mongodb://localhost:27017/my-app',
  // redis
  redis_string: process.env.REDIS_CONNECTION_STRING ?? 'redis://localhost:6379',
  // meilisearch
  // meilisearch_host: process.env.MEILISEARCH_HOST ?? 'http://localhost:7700',
  // meilisearch_private_key: process.env.MEILISEARCH_PRIVATE_KEY ?? '',
  // meilisearch_public_key: process.env.MEILISEARCH_PUBLIC_KEY ?? '',
  /** cdn */
  files_cdn: process.env.FILES_CDN ?? '',
  images_cdn: process.env.IMAGES_CDN ?? '',
  s3_endpoint: process.env.S3_ENDPOINT ?? '',
  s3_bucket_files: process.env.S3_BUCKET_FILES ?? '',
  s3_bucket_images: process.env.S3_BUCKET_IMAGES ?? '',
  s3_region: process.env.S3_REGION ?? '',
  s3_access_key: process.env.S3_ACCESS_KEY ?? '',
  s3_secret_key: process.env.S3_SECRET_KEY ?? '',
};

export default { api_config };
