import sequelize from '../database';
import { Product } from '../models/Product';
import faker from 'faker';

async function run() {
  try {
    await sequelize.authenticate();
    await Promise.all(creatProducts());
    console.log('Products created!');
  } catch (error) {
    console.log(error);
  }

  function creatProducts() {
    return [...new Array(100)].map(createProduct);
  }

  function createProduct() {
    return Product.create({
      name: faker.commerce.productName(),
      price: faker.datatype.number({ min: 100, max: 1000, precision: 2 }),
    });
  }
}

run();
