const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hola bebe como haz estadooo xdxd");
  response.end();
});

server.listen(8080);

console.log("escuchando en el puerto", 8080);
