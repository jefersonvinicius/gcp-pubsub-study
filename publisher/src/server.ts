import app from './app';
import sequelize from './database';

const PORT = 3333;

async function main() {
  console.log('Connecting database...');
  await sequelize.authenticate();

  app.listen(PORT, () => {
    console.log(`Serving in http://localhost:${PORT}`);
  });
}

main();
