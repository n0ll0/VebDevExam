"use strict";
const { log } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
mongoose.connect(process.env.MONGO_URI);

const UserTemplate = {
    email: String,
    password: String,
    name: String,
    number: Number,
    address: String,
};

const ProductTemplate = {
    title: String,
    price: Number,
    img: String,
};

const UserSchema = mongoose.model("users", UserTemplate);
const ProductSchema = mongoose.model("products", ProductTemplate);

/* POST sign in page. */
router.post("/signin", async function (req, res) {
    try {
        const { email, password } = req.body;

        const user = await UserSchema.findOne({ email: email });
        if (!user) {
            console.log("User");
            return res.status(401).send("Invalid credentials");
        }

        if (password != user.password) {
            console.log("pass");
            return res.status(401).send("Invalid credentials");
        }

        // Sign in result
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }

    res.render("index", { title: "Express" });
});

/* POST sign up page. */
router.post("/signup", function (req, res) {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.psw,
            name: req.body.name,
            number: req.body.numb,
            address: req.body.adr,
        };
        let user = new UserSchema(userData);

        user.save().then(() => {
            console.log("new user created!\r\n", JSON.stringify(userData));
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
    res.redirect("/");
});

/* POST browse page. */
router.post("/browse", async (req, res) => {
    try {
        res.status(200).send(await ProductSchema.find({ title: { $regex: req.body.search } }));
        return
    } catch (e) {
        res.status(401).send([{img:"urmom", title:"no", price:0}]);
        console.log(e.message);
    }
});

module.exports = router;
