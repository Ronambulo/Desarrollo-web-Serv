let productos = [
  { id: 1, nombre: "Producto 1", precio: "10" },
  { id: 2, nombre: "Producto 2", precio: "20" },
  { id: 3, nombre: "Producto 3", precio: "30" },
  { id: 4, nombre: "Producto 4", precio: "40" },
  { id: 5, nombre: "Producto 5", precio: "50" },
];

function getProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
      reject("No se pudieron obtener los productos");
    }, 3000);
  });
}

getProductos()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

async function getProductosAsync() {
  try {
    console.log("Obteniendo productos de forma asincrona..");
    const res = await getProductos();
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

getProductosAsync();
