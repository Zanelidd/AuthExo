const models = require("../models");

const createUser = (req, res) => {
  const user = req.body;
  console.log(user);
  models.users
    .insert(user)
    .then(([results]) => {
      res.status(201).json(results);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getUsersEmail = (req, res, next) => {
  const { email } = req.body;
  models.users
  .selectByEmail(email)
  .then(([users]) => {
    if (users != 0) {
      [req.user] = users;
      next();
    } else {
      res.sendStatus(401);
    }
  });
};

module.exports = { createUser, getUsersEmail };
