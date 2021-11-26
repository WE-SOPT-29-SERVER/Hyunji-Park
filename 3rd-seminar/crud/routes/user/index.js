const express = require("express");
const router = express.Router();

// /user/signup
router.post("/signup", require("./userSignupPOST"));
// /user/login
router.post("/login", require("./userLoginPOST"));
// /user/profile/:id
router.get("/profile/:id", require("./userProfileGET"));
// /user/:id
router.put("/:id", require("./userUpdateNamePUT"));
// /user/:id
router.delete("/:id", require("./userIdDELETE"));
module.exports = router;
