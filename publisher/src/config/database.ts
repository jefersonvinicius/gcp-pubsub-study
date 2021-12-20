import path from 'path';
import { ROOT_PATH } from './paths';

console.log(ROOT_PATH);

export = {
  dialect: 'sqlite',
  storage: path.join(ROOT_PATH, 'database.sqlite'),
};
