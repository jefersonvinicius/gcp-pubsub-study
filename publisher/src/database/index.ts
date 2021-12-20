import path from 'path';
import { Sequelize } from 'sequelize';
import { ROOT_PATH } from '../config/paths';
import { Product } from '../models/Product';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(ROOT_PATH, 'database.sqlite'),
});

Product.initialize(sequelize);

export default sequelize;
