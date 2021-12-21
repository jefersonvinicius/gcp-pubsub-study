import app from './app';
import sequelize from './database';

const PORT = 3332;

async function main() {
  await sequelize.authenticate();
  app.listen(PORT, () => {
    console.log(`Serving in http://localhost:${PORT}`);
  });
}

main();
