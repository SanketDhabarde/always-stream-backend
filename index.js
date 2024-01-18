const express = require("express");
require("dotenv").config();
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`app started at port ${port}`);
});
