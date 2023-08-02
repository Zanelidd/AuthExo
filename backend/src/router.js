const express = require("express");
const router = express.Router();

const userControllers = require("./controllers/userControllers");

const { hashPass, verifyPassword } = require("./services/checkAuth");

router.post("/register", hashPass, userControllers.createUser);
router.post("/login", userControllers.getUsersEmail, verifyPassword);

module.exports = router;
