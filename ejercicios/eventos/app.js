const EventEmitter = require("node:events");

const emisorProducto = new EventEmitter();
emisorProducto.on("nuevoProducto", (producto) => {
  console.log("Nuevo producto:", producto);
});

emisorProducto.emit("nuevoProducto", "Zapatos");

setInterval(() => {
  emisorProducto.emit("nuevoProducto", "producto");
}, 500);
