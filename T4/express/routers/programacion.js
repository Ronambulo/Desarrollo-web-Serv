const express = require("express");
const infoCursos = require("../data/infoCursos.json");

const routerProgramacion = express.Router();
routerProgramacion.use(express.json());

cursos = infoCursos.programacion;

routerProgramacion.get("/", (req, res) => {
  res.json(cursos);
});

routerProgramacion.post("/", (req, res) => {
  const { body } = req;
  cursos.push(body);
  res.send("Curso añadido");
});

routerProgramacion.delete("/:id", (req, res) => {
  const { id } = req.params;
  const indice = cursos.findIndex((curso) => curso.id == id);
  if (indice >= 0) {
    cursos.splice(indice, 1);
  }
  res.json(cursos);
});

module.exports = routerProgramacion;
