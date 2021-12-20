import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { Message, PubSub } from '@google-cloud/pubsub';

const app = express();

const products: any[] = [];

const pubsub = new PubSub();
const topic = pubsub.topic('products');

topic
  .subscription('products-sync')
  .get({ autoCreate: true })
  .then(([subscriber]) => {
    subscriber.on('message', (message: Message) => {
      const decoded = Buffer.from(message.data).toString('utf8');
      console.log(decoded);
      products.push(decoded);
    });
  });

app.get('/report', (req, response) => {
  return response.json({ products });
});

export default app;
