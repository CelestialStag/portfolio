import { IAPIConfig, api_config } from './api.config';

export type ISecureConfig = IAPIConfig & {
  /** accounts */
  admin_email: string;
  admin_password: string;
  admin_first_name: string;
  admin_last_name: string;
  developer_email: string;
  developer_password: string;
  developer_first_name: string;
  developer_last_name: string;
};

export const secure_config: ISecureConfig = {
  ...api_config,
  /** accounts */
  admin_email: process.env.ADMIN_EMAIL ?? 'admin@example.com',
  admin_password: process.env.ADMIN_PASS ?? 'super-secret',
  admin_first_name: process.env.ADMIN_FIRST_NAME ?? 'Admin',
  admin_last_name: process.env.ADMIN_LAST_NAME ?? 'Account',
  developer_email: process.env.DEVELOPER_EMAIL ?? 'developer@example.com',
  developer_password: process.env.DEVELOPER_PASS ?? 'super-secret',
  developer_first_name: process.env.DEVELOPER_FIRST_NAME ?? 'Developer',
  developer_last_name: process.env.DEVELOPER_LAST_NAME ?? 'Account',
};
