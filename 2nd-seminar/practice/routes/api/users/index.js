const express = require("express");
const router = express.Router();

router.get("/signup", (req, res) => {
  const result = {
    status: 200,
    message: "[GET] api/users/signup",
  };

  res.status(200).send(result);
});

router.get("/login", (req, res) => {
  const result = {
    status: 200,
    message: "[GET] api/users/login",
  };

  res.status(200).send(result);
});

module.exports = router;
