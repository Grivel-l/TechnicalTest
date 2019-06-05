require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("./models/schemas/auth.schema")(mongoose);
const loadRoutes = require("./routes/");
const connectedUsers = {};
const app = express();
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.set("useCreateIndex", true);
mongoose.connection.on("connected", () => {
  console.log("Connected to database");
  try {
    loadRoutes(app, connectedUsers);
  } catch (error) {
    console.error(`Couldn't load routes: ${error}`);
  }
});

app.listen(3000, () => {
  console.log("Server is running");
  (function connectDtb() {
    mongoose.connect("mongodb://localhost/TechnicalTest", {useNewUrlParser: true})
      .catch(error => {
        console.error("Couldn't connect to dtb", error);
        setTimeout(() => connectDtb(), 5000);
      });
  })();
});

