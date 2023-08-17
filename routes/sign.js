"use strict";
const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
const router = express.Router();

const dataTemplate = {
    email: String,
    password: String,
    name: String,
    number: Number,
    address: String,
};

const UserSchema = mongoose.model("users", dataTemplate);

/* POST sign in page. */
router.post("/signin", function (req, res) {
    try {
    } catch (e) {
        console.log(e.message);
    }
    res.render("index", { title: "Express" });
});

/* POST sign up page. */
router.post("/signup", function (req, res) {
    try {
        const le_obj = {
            email: req.body.email,
            password: req.body.psw,
            name: req.body.name,
            number: req.body.numb,
            address: req.body.adr,
        };
        let user = new UserSchema(le_obj);

        user.save().then(() => {
            console.log("new user created!\r\n", JSON.stringify(le_obj,));
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
    res.redirect("/");
});

module.exports = router;
