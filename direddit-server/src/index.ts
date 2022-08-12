import { __POSTGRESPW__, __prod__ } from './constants';
import { connect, init } from './application';

const main = async () => {
  // connect to a database
  await connect();
  await init();
};

main().catch((err) => {
  console.error(err);
});
