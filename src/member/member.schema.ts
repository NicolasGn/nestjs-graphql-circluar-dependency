import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.schema';

@ObjectType()
export class Member {
  @Field(() => ID)
  id!: string;

  @Field()
  color!: string;

  @Field(() => User)
  user!: User;
}
