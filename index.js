const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;


app.use("/api", routes);


app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("App started at port ", PORT);
});
