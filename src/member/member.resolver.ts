import { Resolver } from '@nestjs/graphql';
import { Member } from './member.schema';

@Resolver(() => Member)
export class MemberResolver {}
