import { Product } from '../models/Product';
import { PubSub } from '@google-cloud/pubsub';

export class PublisherProductService {
  static async execute(): Promise<void> {
    const pubSub = new PubSub();
    const topic = pubSub.topic('products');

    const productNotSynced = await Product.findOne({
      where: { synced: false },
    });

    if (!productNotSynced) {
      console.log('All products synced!!');
      return;
    }

    const data = Buffer.from(JSON.stringify(productNotSynced.toModelView()));
    await topic.publishMessage({ data });

    await productNotSynced.update({
      synced: true,
      syncedAt: new Date(),
    });
  }
}
