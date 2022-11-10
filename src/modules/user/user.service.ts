import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepository) {}

  async findAll(): Promise<User[]> {
    return this.userRepo.findAll();
  }
}
