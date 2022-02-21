const express = require("express");
const app = express();
const port = 3000;

/* Servir contenido estatico */
app.use(express.static("public"));

app.get("/generic", (req, res) => {
 res.sendFile('generic.html', {root: 'public'})
});

app.get("/elements", (req, res) => {
    res.sendFile('elements.html', {root: 'public'})
});

/* Si no encuentra ninguna ruta */
app.get("*", (req, res) => {
  res.send("404 not found");
});

app.listen(port, () => {
  console.log(`El server esta corriendo en el puerto ${port}`);
});
