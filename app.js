//* Imports *//
require("dotenv").config();
require("colors");
const express = require("express");
const socketIO = require("socket.io");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const api = require("./api");
const passport = require("passport");
const session = require("cookie-session");
const logErrors = require("./Helpers/logErrors");

//* Configs *//
app.use(morgan("dev"));
app.use(express.json());
app.use(
  session({
    keys: ["key1", "key2"],
    name: "session",
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(api);

//* Listening *//
const port = process.env.PORT || 3000;
const DBUri = process.env.DB_URI || "mongodb://localhost:27017/CodeStream";
mongoose
  .connect(DBUri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    app.listen(port, () =>
      console.log(
        `⛵ [$] Server Listening On http://127.0.0.1:${port}`.yellow.underline
      )
    );
  })
  .catch((err) => {
    logErrors(
      err.message
        ? err.message
        : "Something Wrong Happened While Connecting To The Database!"
    );
  });
