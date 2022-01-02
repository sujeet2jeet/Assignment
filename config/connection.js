const mongoose = require('mongoose');

const connectToDB = () => {
  return mongoose.connect(process.env.MONGODB_URL).then((resp) => {
    console.log(`MongoDB connected with server ${resp.connection.host}`);
  });
};

module.exports = connectToDB;
