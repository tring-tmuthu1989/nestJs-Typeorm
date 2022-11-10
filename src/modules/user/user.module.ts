import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UserResolver, UserService, UserRepository],
  exports: [TypeOrmModule.forFeature([User]), UserService, UserRepository]
})
export class UserModule {}
