import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository])
  ],
  providers: [UserResolver, UserService],
  exports: [TypeOrmModule.forFeature([UserRepository]), UserService]
})
export class UserModule {}
