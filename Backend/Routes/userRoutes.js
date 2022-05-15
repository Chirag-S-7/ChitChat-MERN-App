const express = require('express');
const {registerUser,authUser,allUsers } = require('../Controllers/userController')
const router = express.Router();
const { protect } = require("../Middleware/authMiddleware");

router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports=router;