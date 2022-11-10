import { DataSource } from 'typeorm';
import { registerAs } from '@nestjs/config';
import devDbConfig from './dev.config';

export default registerAs('typeOrmConfig', async () => {
  let data;
  if (process.env.USE_LOCAL_DB === 'true' || process.env.NODE_ENV === 'test') {
    data = devDbConfig();
  } else {
    data = devDbConfig();
  }
  return {
    type: 'postgres',
    host: data.host,
    port: parseInt(data.port),
    username: data.username,
    password: data.password,
    database: data.dbName,
    autoLoadEntities: true,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    subscribers: [__dirname + '/../**/*.subscriber{.ts,.js}'],
    migrations: [__dirname + '/./migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: __dirname + '/./migrations',
    },
    synchronize: process.env.DB_SYNC === "true",
    logging: !!process.env.DB_LOGGING,
    pool: {
      max: 25,
      min: 1,
      maxWaitingClients: 10,
      idleTimeoutMillis: 300000,
    },
  };
});
