import Redis from 'ioredis';
import { api_config } from '@lib/config';

export const redis_db = new Redis(api_config.redis_string, { lazyConnect: true });

export const connect_redis = async () => {
  try {
    await redis_db.connect();
    console.log(`[database]: connected to redis`);
  } catch {
    console.log(`[database]: {error} redis`);
  }
};
