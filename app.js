const express = require("express");
require("./db/mongoose");
const mangaRouter = require("./routers/manga");
const userRouter = require("./routers/users");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(mangaRouter);

module.exports = app;
