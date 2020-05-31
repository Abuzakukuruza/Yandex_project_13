const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");
const NotFoundError = require("./errors/notFoundError");

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect("mongodb://localhost:27017/mestodb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  req.user = {
    _id: "5ecb8bf13a5aeb4efe09317e", //  _id созданного тестового пользователя
  };
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Запрашиваемый ресурс не найден" });
});
/* eslint-disable */
app.use((err, req, res, next) => {
  return res
    .status(err.statusCode || 500)
    .send({ status: err.status, message: err.message });
});
/* eslint-enable */
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
