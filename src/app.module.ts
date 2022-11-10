import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import dbConfig from './db/db.config';
import cors from 'cors';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: './graphqlschema.graphql',
      sortSchema: true,
      playground: true,
      driver: ApolloDriver,
      context: ({ req }) => ({ headers: req.headers }),
    }),
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
      load: [dbConfig],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cors({
          origin: '*',
        })
      )
      .forRoutes('/*');
  }
}
