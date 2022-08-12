import { MikroORM } from '@mikro-orm/core';
import express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import config from './mikro-orm.config';
import { HelloResolver } from './resolvers/hello';

// import { PostResolver } from './resolvers/posts';
import { ApolloServer } from 'apollo-server-express';

export const connect = async () => {
  try {
    // connect to a database || micro-orm
    const orm = await MikroORM.init(config);
    // await orm.getMigrator().up();
    const migrator = orm.getMigrator();
    const migrations = await migrator.getPendingMigrations();
    if (migrations && migrations.length > 0) {
      await migrator.up();
    }
  } catch (error) {
    console.error('📌 Could not connect to the database', error);
    throw Error(error);
  }
};

export const init = async () => {
  // express server
  const app = express();

  try {
    const schema = await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    });
    const apolloServer = new ApolloServer({
      schema,
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
      console.log(`server started on http://localhost:4000`);
    });
  } catch (error) {
    console.error('📌 Could not start server', error);
  }
};
