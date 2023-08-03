const models = require("../models");

const getAllUsers = (req, res) => {
  models.users
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const createUser = (req, res) => {
  const user = req.body;
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
  .selectByEmail(email).then(([users]) => {
    if (users != 0) {
      [req.user] = users;
      next();
    } else {
      res.status(401).send("User not found in database");
    }
  });
};

const deleteSession = (req, res) => {
  // créer un blacklist pour stocker le token
  res
    .cookie("token", null, {
      httpOnly: true,
    })
    .status(200)
    .send({ Message: "User disconnected" });
};

module.exports = { createUser, getUsersEmail, deleteSession, getAllUsers };
