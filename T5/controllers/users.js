/**
 * Obtener lista de la bbdd
 * @param {*} req
 * @param {*} res
 */

const { usersModel } = require("../models/index");

const getItems = async (req, res) => {
  try {
    const data = await usersModel.find();
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching the tracks" });
  }
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
