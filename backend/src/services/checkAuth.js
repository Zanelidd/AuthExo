const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const uid = require("uid2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  time: 5,
  parellelism: 1,
};

const hashPass = (req, res, next) => {
  const salt = uid(16);

  argon2
    .hash(req.body.password + salt, hashingOptions)
    .then((hashedPassword) => {
      req.body.hpassword = hashedPassword;
      req.body.salt = salt;
      delete req.body.password;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the user");
    });
};

const verifyPassword = (req, res) => {
  const passwordtoverify = req.body.password + req.user.salt;

  argon2
    .verify(req.user.password_hash, passwordtoverify)
    .then((Verified) => {
      if (Verified) {
        const payload = { sub: req.user.id };
        const token = jwt.sign(payload, process.env.TOKEN_SECRET);

        delete req.user.password;
        res
          .status(200)
          .cookie("token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 60 * 60),
          })
          .send({ user: { id: req.user.id }, token });
      } else {
        res
          .status(401)
          .send("Message : Les informations renseignées sont incorrectes");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { hashPass, verifyPassword };
