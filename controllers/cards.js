const Card = require("../models/card");

module.exports.getCards = (err, req, res, next) => {
  Card.find({})
    .then((card) => res.send({ data: card }))
    .catch(next);
};

module.exports.createCard = (err, req, res, next) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch(next);
};

module.exports.deleteCard = (err, req, res, next) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => {
      if (card) {
        res.send({
          message: `Карточка с _id:${req.params.id} успешно удалена из базы данных`,
        });
      }
      throw new NotFoundError("Карточка с _id:${req.params.id} не найдена в базе данных");
    })
    .catch(next);
};
