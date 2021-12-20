import app from './app';
import sequelize from './database';
import { startSyncProductsQueue } from './queues/sync-products';

const PORT = 3333;

async function main() {
  startSyncProductsQueue();

  console.log('Connecting database...');
  await sequelize.authenticate();

  app.listen(PORT, () => {
    console.log(`Serving in http://localhost:${PORT}`);
  });
}

main();
