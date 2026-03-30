import { Query, Resolver } from '@nestjs/graphql';
import { Group } from './group.schema';

@Resolver(() => Group)
export class GroupResolver {
  @Query(() => Group)
  group() {
    return {};
  }
}
