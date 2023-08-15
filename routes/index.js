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

const collection = client.db("veb").collection(Users);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

/* GET home page. */
router.get("/signin", function (req, res) {
  res.render("signin");
});

/* GET home page. */
router.get("/signup", function (req, res) {
  res.render("signup");
});

/* POST home page. */
router.post("/signin", function (req, res) {
  let formData = req.body;
  console.log(formData);
  res.render("index", { title: "Express" })
});

/* POST home page. */
router.post("/signup", function (req, res) {
  let formData = req.body;
  console.log(formData);
  res.render("index", { title: "Express" })
});


module.exports = router;
