import Queue from 'bull';
import { PublisherProductService } from '../services/PublisherProductService';

const syncProductsQueue = new Queue('products syncing', 'redis://127.0.0.1:6379');

syncProductsQueue.process(async (job) => {
  console.log('Processing job: ', job.id);
  await PublisherProductService.execute();
  await sleep();
});

function sleep() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}

export function startSyncProductsQueue() {
  syncProductsQueue.add(null, {
    repeat: {
      every: 10000,
    },
  });
}
