import { BaseRepository } from './../../db/base.repository';
import { User } from './entities/user.entity';
import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private dataSource: DataSource)
  {
    super(User, dataSource.createEntityManager());
  }
}