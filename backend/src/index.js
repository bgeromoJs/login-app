require("dotenv-safe").load();
var http = require("http");
var cors = require("cors");
const express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const helmet = require("helmet");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require("./routes"));

var server = http.createServer(app);
server.listen(3000);
