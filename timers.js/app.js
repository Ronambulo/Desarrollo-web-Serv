//import { mostarTema, sumarXY } from "./modules/funciones.js";
const { mostarTema, sumarXY } = require("./modules/funciones.js");

setTimeout(() => {
  mostarTema("Hola Mundo");
}, 1000); // 1 segundo

setTimeout(() => {
  mostarTema("Hola mundo 2");
}, 500); // 1 segundo

setInterval(() => {
  console.log(sumarXY(2, 4));
}, 1000); // 1 segundo
