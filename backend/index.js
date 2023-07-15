require("dotenv").config();
const app = require("./app");
const connect = require("./config/db");

const port = process.env.PORT;

// Uncaught error handling
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log(`Shutting Down The Server Due To Uncaught Exception`);
  process.exit(1);
});

connect();

const server = app.listen(port, () => {
  console.log(`Server Is Running on http://localhost:${port}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting Down The Server Due To Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
