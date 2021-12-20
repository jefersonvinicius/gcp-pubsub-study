import app from './app';

const PORT = 3332;

async function main() {
  app.listen(PORT, () => {
    console.log(`Serving in http://localhost:${PORT}`);
  });
}

main();
