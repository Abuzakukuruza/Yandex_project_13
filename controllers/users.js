const User = require("../models/user");

module.exports.getUsers = (err, req, res, next) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch(next);
};

module.exports.getUserById = (err, req, res, next) => {
  User.findById(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch(next);
};

module.exports.createUser = (err, req, res, next) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(next);
};

// обновление профиля пользователя
module.exports.updateUserProfile = (err, req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      upsert: false, // если пользователь не найден, он не будет создан
    }
  )
    .then((user) => res.send({ data: user }))
    .catch(next);
};

// обновление аватара пользователя
module.exports.updateUserAvatar = (err, req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      upsert: false, // если пользователь не найден, он не будет создан
    }
  )
    .then((user) => res.send({ data: user }))
    .catch(next);
};
