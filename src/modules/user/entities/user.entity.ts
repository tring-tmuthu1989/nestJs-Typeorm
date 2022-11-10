import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("users")
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  readonly id: string;

  @Field({ nullable: true })
  @Column({ nullable: true, unique: true })
  email: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  lastName: string;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    nullable: true,
  })
  @Column({ insert: true })
  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @Column({ insert: true })
  createdAt?: Date;


  @DeleteDateColumn({
    name: 'u_deletedAt',
    type: 'timestamp without time zone',
  })
  deletedAt: Date;
}
