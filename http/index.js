const http = require("node:http");
const cursos = require("./cursos.json");

const port = 8080;
const server = http.createServer((req, res) => {
  console.log("Request received");
  console.log(`URL: ${req.url}`);
  console.log(`Method: ${req.method}`);

  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    if (req.url === "/matematicas") {
      res.writeHead(200);
      res.end(JSON.stringify(cursos.matematicas));
    } else if (req.url === "/programacion") {
      res.writeHead(200);
      res.end(JSON.stringify(cursos.programacion));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Ruta no encontrada" }));
    }
  } else if (req.method === "POST") {
    if (req.url === "/matematicas" || req.url === "/programacion") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        try {
          const data = JSON.parse(body);
          console.log(data);
          res.writeHead(200);
          res.end(JSON.stringify({ message: "Procesamiento POST finalizado" }));
        } catch (error) {
          res.writeHead(400);
          res.end(JSON.stringify({ error: "JSON inválido" }));
        }
      });
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Ruta no encontrada" }));
    }
  } else {
    res.writeHead(405);
    res.end(JSON.stringify({ error: "Método no permitido" }));
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

server.on("error", (err) => {
  console.error("Server error: ", err);
  const newPort = port + 1;
  server.listen(newPort, () => {
    console.log("Server running on port: ", server.address().port);
  });
});
