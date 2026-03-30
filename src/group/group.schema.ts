import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Member } from '../member/member.schema';

@ObjectType()
export class Group {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field(() => [Member])
  members!: Member[];
}
