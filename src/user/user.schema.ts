import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Group } from '../group/group.schema';

@ObjectType()
export class User {
  @Field(() => ID)
  id!: string;

  @Field()
  username!: string;

  @Field(() => [Group])
  groups!: Group[];
}
