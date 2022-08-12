import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import 'reflect-metadata';
import { MikroORM } from '@mikro-orm/core';

import { HelloResolver } from './resolvers/hello';
import { buildSchema } from 'type-graphql';
import { __POSTGRESPW__, __prod__ } from './constants';
// import { Post } from './entities/Post';
import config from './mikro-orm.config';

const main = async () => {
  const orm = await MikroORM.init(config);
  await orm.getMigrator().up();

  // const emFork = orm.em.fork(); // <-- create the fork
  // const posts = await emFork.find(Post, {});

  // express server
  const app = express();
  // apollo server
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });
  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`server started on http://localhost:4000`);
  });
};

main().catch((err) => {
  console.error(err);
});
