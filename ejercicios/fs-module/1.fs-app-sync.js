const { readFileSync, renameSync } = require("node:fs");

//leer archivo
try {
  const file = readFileSync("./index.html", "utf8");
  console.log(file);
} catch (error) {
  console.error("Error reading file");
}

//renombrar archivo
try {
  const file = renameSync("./index.html", "./index-renamed.html");
  console.log("File renamed");
} catch (error) {
  console.error("No existe un archivo con ese nombre");
}
