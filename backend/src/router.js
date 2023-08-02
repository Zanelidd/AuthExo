const express = require("express");
const router = express.Router();

const userControllers = require("./controllers/userControllers");

const { hashPass, verifyPassword } = require("./services/checkAuth");

router.post("/register", hashPass, userControllers.createUser);
router.post("/login", userControllers.getUsersEmail, verifyPassword);
router.post("/logout",userControllers.deleteSession)

module.exports = router;
