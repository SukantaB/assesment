const express = require("express");
const app = express();
const morgan = require("morgan");
const userRouter = require("./Routes/user.router");
const postRouter = require("./Routes/post.router");
const globalErrHandler = require("./Controller/error.controller");
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use(globalErrHandler);

module.exports = app;
