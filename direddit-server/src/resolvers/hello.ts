import { Query, Resolver } from 'type-graphql';

@Resolver()
export class HelloResolver {
  //   @Query((returns) => String)
  @Query(() => String)
  hello() {
    return 'hello';
  }
}
