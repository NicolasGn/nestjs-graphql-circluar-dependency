import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.schema';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  user() {}
}
