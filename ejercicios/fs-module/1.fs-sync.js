const { unlink } = require("node:fs");

try {
  unlink("file.txt");
  console.log("File removed");
} catch (error) {
  console.error("Error removing file");
}
