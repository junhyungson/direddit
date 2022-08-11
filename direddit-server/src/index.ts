import { MikroORM } from '@mikro-orm/core';
import { __POSTGRESPW__, __prod__ } from './constants';
import { Post } from './entities/Post';
import config from './mikro-orm.config';
const main = async () => {
  const orm = await MikroORM.init(config);
  await orm.getMigrator().up();

  const emFork = orm.em.fork(); // <-- create the fork
  // const post = emFork.create(Post, {
  //   // <-- use the fork instead of global `orm.em`
  //   title: 'my Third post',
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // });
  // await emFork.persistAndFlush(post); // <-- use the fork instead of global
  const posts = await emFork.find(Post, {});
  console.log(posts);
};

main().catch((err) => {
  console.error(err);
});
