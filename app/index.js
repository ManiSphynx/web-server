require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const port = process.env.PORT;

/* Servir contenido estatico */
app.use(express.static(path.join(__dirname, "../", "/public")));
app.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "../", "/views/partials"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Emanuel",
    titulo: "Hobbyes con node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Emanuel",
    titulo: "Hobbyes con node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Emanuel",
    titulo: "Hobbyes con node",
  });
});

/* Si no encuentra ninguna ruta */
app.get("*", (req, res) => {
  res.send("404 not found");
});

app.listen(port, () => {
  console.log(`El server esta corriendo en el puerto ${port}`);
});
