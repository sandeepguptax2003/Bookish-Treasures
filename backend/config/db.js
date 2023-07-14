const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((res) => {
      console.log(`DB Connected Successfully ${res.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = connect;
