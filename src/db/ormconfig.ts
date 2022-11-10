import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import devDbConfig from './dev.config';
ConfigModule.forRoot({
  isGlobal: true,
})
const data = devDbConfig();
export default new DataSource({
  type: 'postgres',
  host: data.host,
  port: parseInt(data.port),
  username: data.username,
  password: data.password,
  database: data.dbName,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  subscribers: [__dirname + '/../**/*.subscriber{.ts,.js}'],
  migrations: [__dirname + '/./migrations/*{.ts,.js}'],
  synchronize: process.env.DB_SYNC === "true",
  logging: !!process.env.DB_LOGGING,
  migrationsRun: true,
  poolSize: 25,
});
