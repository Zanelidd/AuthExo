const express = require("express");
const router = express.Router();

const userControllers = require("./controllers/userControllers");

const {
  hashPass,
  verifyPassword,
  verifyToken,
} = require("./services/checkAuth");
const schema = require("./services/joiValidator");

router.post("/register", [schema, hashPass], userControllers.createUser);
router.post("/login", userControllers.getUsersEmail, verifyPassword);

//Protected Routes

router.use(verifyToken);

router.get("/users", userControllers.getAllUsers);
router.post("/logout", userControllers.deleteSession);

module.exports = router;
