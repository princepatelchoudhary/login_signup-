const express = require('express')
const router = express.Router();

const {login} = require("../Controller/login.js");
const {signup}= require("../Controller/signup.js");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;