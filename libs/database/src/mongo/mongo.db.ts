import mongoose from 'mongoose';

import { api_config } from '@lib/config';

export const connect_mongo = async () => {
  try {
    await mongoose.connect(api_config.mongo_string, {
      tlsCAFile: `${process.cwd()}/../../prisma/ca-cert.crt`,
      ssl: true,
      sslValidate: false,
    });
    console.log(`[database]: connected to mongo`);
  } catch {
    console.log(`[database]: {error} mongo`);
  }
};
