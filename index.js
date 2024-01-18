const express = require("express");
require("dotenv").config();

const routes = require("./routes");
const { initializeDbConnection } = require("./db/db.connect");

const app = express();
const port = process.env.PORT || 3000;

initializeDbConnection();

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`app started at port ${port}`);
});
