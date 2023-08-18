"use strict";
const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

/* GET sign in page. */
router.get("/signin", function (req, res) {
  res.render("signin");
});

/* GET sign up page. */
router.get("/signup", function (req, res) {
  res.render("signup");
});



module.exports = router;
