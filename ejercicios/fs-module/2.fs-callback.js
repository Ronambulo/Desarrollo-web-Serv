const { unlink } = require("node:fs");

unlinkSync("/tmp/hello", (err) => {
  if (err) throw err;
  console.log("successfully deleted /tmp/hello");
});
