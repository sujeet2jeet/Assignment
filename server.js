const app = require('./app');
const connectToDB = require('./config/connection');
const path = require('path');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 4000;

// Unhandled Uncaught Exception
process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error : --', err);
  process.exit(1); //mandatory (as per the Node.js docs)
});

dotenv.config({
  path: path.resolve(__dirname, 'config', 'config.env'),
});

const start = async () => {
  await connectToDB();
  app.listen(
    process.env.PORT,
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
  );
};

start();
