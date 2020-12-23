const express = require("express");
const app = express();
const port = 3001;

app.get("/", function (req, res) {
  res.send("express here");
});

app.listen(port, function () {
  console.log("Express is running in the server 3001");
});
