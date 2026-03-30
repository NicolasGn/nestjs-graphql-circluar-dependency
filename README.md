Simple project to produce a circular dependency problem in a typical code-first @nestjs/graphql implementation.

It defines a very basic GraphQL API schema illustrating a circular pattern very common in GraphQL.

This is in no way a bad practice in the GraphQL, it's even its core philosophy.

You might want to expose these 2 queries to your clients for example:

```graphql
query {
  user {
    id
    username
    
    groups {
      id
      name
      
      members {
        id
        color
      }
    }
  }
}

query {
  group {
    id
    name
    
    members {
      id
      color
      
      user {
        id
        username
      }
    } 
  }
}
```

Unfortunately, it's not supported by the [@nestjs/graphql](https://github.com/nestjs/graphql) package in the code-first approach.

The `@ResolveField()` return type param needs the reference to the class type, creating a cyclical js module import issue: User -> Group -> Member -> User.

```
$ pnpm start
ReferenceError: Cannot access 'User' before initialization
    at User (/nestjs-graphql-circular/src/user/user.schema.ts:5:14)
    at Object.<anonymous> (/nestjs-graphql-circular/src/member/member.schema.ts:9:20)
    at Module._compile (node:internal/modules/cjs/loader:1730:14)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.require (node:internal/modules/cjs/loader:1487:12)
    at require (node:internal/modules/helpers:135:16)
```