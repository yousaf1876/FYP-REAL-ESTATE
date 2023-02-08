const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController")

//public routes
router.post("/loginotp", userController.userLogin)
router.post("/verifyotp", userController.verifyOTP)

module.exports = router;