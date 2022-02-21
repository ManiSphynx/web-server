const express = require("express");
const app = express();
const port = 3000;

/* Servir contenido estatico */
app.use(express.static("public"));


app.get("/hola-mundo", (req, res) => {
  res.send("Hello World");
});

/* Si no encuentra ninguna ruta */
app.get("*", (req, res) => {
  res.send("404 not found");
});

app.listen(port, () => {
  console.log(`El server esta corriendo en el puerto ${port}`);
});
