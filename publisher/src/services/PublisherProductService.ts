import { Product } from '../models/Product';
import { PubSub } from '@google-cloud/pubsub';

export class PublisherProductService {
  static async execute(): Promise<void> {
    const pubSub = new PubSub();
    const topic = pubSub.topic('products');

    await topic.publishMessage({ data: Buffer.from('Teste') });
  }
}
