const express = require("express");
const router = express.Router();

const {signup} = require("../controllers/user");

//create a route method. 
router.post("/signup", signup);

module.exports = router;