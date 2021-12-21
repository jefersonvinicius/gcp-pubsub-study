import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { Message, PubSub } from '@google-cloud/pubsub';
import { Product, ProductAttrs } from './models/Product';

const app = express();

const pubsub = new PubSub();
const topic = pubsub.topic('products');

topic
  .subscription('products-sync')
  .get({ autoCreate: true })
  .then(([subscriber]) => {
    subscriber.on('message', async (message: Message) => {
      try {
        const productAttrs = JSON.parse(Buffer.from(message.data).toString('utf8')) as ProductAttrs;
        const productAlreadyExists = await Product.findByPk(productAttrs.id);

        if (productAlreadyExists) await updateExistingProduct(productAlreadyExists, productAttrs);
        else await createNewProduct(productAttrs);

        message.ack();
      } catch (error) {
        console.log('Error: ', error);
        message.nack();
      }

      async function createNewProduct(productAttrs: ProductAttrs) {
        console.log('Creating new product...');
        await Product.create({ ...productAttrs });
      }

      async function updateExistingProduct(product: Product, newData: ProductAttrs) {
        console.log('Updating existing product...');
        await product.update({ ...newData });
      }
    });
  });

app.get('/report', async (req, response) => {
  const result = await Product.findAndCountAll();
  return response.json(result);
});

export default app;
