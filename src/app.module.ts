import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';
import { UserResolver } from './user/user.resolver';
import { GroupResolver } from './group/group.resolver';
import { MemberResolver } from './member/member.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'schema.graphql'),
    }),
  ],
  providers: [UserResolver, GroupResolver, MemberResolver],
})
export class AppModule {}
