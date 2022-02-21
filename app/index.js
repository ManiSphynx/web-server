const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/hola-mundo", function (req, res) {
  res.send("Hello World");
});

/* Si no encuentra ninguna ruta */
app.get("*", function (req, res) {
  res.send("404 not found");
});

app.listen(3000);
