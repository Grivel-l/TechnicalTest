const express = require("express");
const bodyParser = require("body-parser");

const loadRoutes = require("./routes/");
const app = express();
app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
  console.log("Server is running");
  try {
    loadRoutes(app);
  } catch (error) {
    console.error(`Couldn't load routes: ${error}`);
  }
});

