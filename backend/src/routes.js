var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
const verify = require("./config/authenticate");

// define the home page route
router.get("/", verify, (req, res) => {
  res.send("home page");
});

// define the about route
router.get("/about", verify, (req, res) => {
  res.send("About birds");
});

router.post("/login", (req, res, next) => {
  if (req.body.user === "admin" && req.body.pwd === "123") {
    //auth ok
    const id = 1; //esse id viria do banco de dados
    var token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300 // expires in 5min
    });
    res.status(200).send({ auth: true, token: token });
  }
  res.status(500).send("Login inválido!");
});

module.exports = router;
