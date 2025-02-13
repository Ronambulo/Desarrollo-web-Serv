/**
 * Obtener lista de la bbdd
 * @param {*} req
 * @param {*} res
 */

const getItems = (req, res) => {
  const data = ["hola", "mundo"];
  res.send(data);
};

const getItem = (req, res) => {
  const id = req.params.id;
  const data = [id];
  res.send(data);
};

const createItem = (req, res) => {
  const data = req.body;
  res.send(data);
};
const updateItem = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  res.send(data);
};
const deleteItem = (req, res) => {
  const id = req.params.id;
  const data = [id];
  res.send(data);
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
