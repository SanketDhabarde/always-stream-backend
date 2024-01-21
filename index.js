const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const routes = require("./routes");
const { initializeDbConnection } = require("./db/db.connect");

const app = express();
const port = process.env.PORT || 3000;

initializeDbConnection();

app.use(bodyParser.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`app started at port ${port}`);
});
