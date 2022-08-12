import {
  __POSTGRESPW__,
  __prod__,
  __POSTGRESUSER__,
  __POSTGRESDBNAME__,
} from './constants';
import { Post } from './entities/Post';
import { Options } from '@mikro-orm/core'; // `Options` is what you want, no need to get the type from init method
import path from 'path';
// const config: Options = {
// export default {
//   migrations: {
//     // path: path.join(__dirname, './migrations'),
//     // path: './migrations', // path to the folder with migrations
//     path: process.cwd() + '/migrations', // path to folder with migration files
//     glob: '!(*.d).{cjs,js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
//     pattern: /^[\w-]+\d+\.(js|ts)$/,
//   },
//   entities: [Post], // no need for `entitiesTs` this way
//   dbName: 'direddit',
//   type: 'postgresql', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
//   user: 'postgres',
//   password: __POSTGRESPW__,
//   debug: !__prod__,
// } as Parameters<typeof MikroORM.init>[0];

const config: Options = {
  migrations: {
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    glob: '!(*.d).{cjs,js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
  },
  entities: [Post], // no need for `entitiesTs` this way
  // dbName: 'direddit',
  dbName: __POSTGRESDBNAME__,
  type: 'postgresql', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
  user: __POSTGRESUSER__,
  password: __POSTGRESPW__,
  debug: !__prod__, // is this in prodction or not?
  allowGlobalContext: true,
};

export default config;
