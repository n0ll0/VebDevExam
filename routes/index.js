var express = require("express");
var router = express.Router();

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const collection = client.db("veb").collection("Users");

async function run() {
  try {
    await client.connect(uri);
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
    } catch(error) {
      console.log(error)
    }
    finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run();

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
  res.sendFile(__dirname + "views\index.ejs")
  res.render("signup");
});

/* POST sign in page. */
router.post("/signin", function (req, res) {
  res.render("index", { title: "Express" })
});



/* Necessary for Sign up page. */
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://VebDevDB:Vebdev!1234@veb.06bmvaj.mongodb.net/UserData", {useNewUrlParser: true}, {useUnifiedTopology: true});

const notesSchema = {
  email: String,
  password: String,
  name: String,
  number: Number,
  adress: String,
}

const Data = mongoose.model("Data", notesSchema);

/* POST sign up page. */
router.post("/signup", function (req, res) {
  let formData = new Data({
    email: req.body.email, 
    password: req.body.psw,
    name: req.body.name,
    number: req.body.numb,
    adress: req.body.adr,
  });
  formData.save();
  res.redirect("/");
})

module.exports = router;
