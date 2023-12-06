const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');

console.log('Hello');

async function main() {
  try {
    await mongoose.connect(config.database_url);
    console.log('MongoDB connected');
    app.listen(config.port, () => {
      console.log(
        `Example app listening on port http://localhost:${config.port}`,
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();
