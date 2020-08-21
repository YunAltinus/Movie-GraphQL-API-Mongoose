const mongoose = require('mongoose');

// DB connection
const connectionDB = () =>
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(() => console.log('Veritabanına bağlandı'))
    .catch(e => console.log(e));

module.exports = connectionDB;
