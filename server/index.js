const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
dotenv.config({ path: "../.env" });

process.on("uncaughtException", err => {
  process.exit(1);
});
const DB =
  process.env.NODE_ENV === "development"
    ? process.env.DATABASE_LOCAL
    : "prod-setup-url";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`connection Sucsessfull `))
  .catch(() => console.log(`Error`));

const port = process.env.SERVER_PORT || 3000;

const server = app.listen(port, () => {
  console.log(`app listening to ${port}`);
});

process.on("unhandledRejection", err => {
  server.close(() => {
    process.exit(1);
  });
});
