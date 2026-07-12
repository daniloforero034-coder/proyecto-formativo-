const {
  createFeeding: createFeedingService,
  updateFeeding: updateFeedingService
} = require("../services/feedingService.js");

const { Response } = require("../functions/response");


const getAllFeedings = (req, res) => {
  const body = req.body;

  console.log("Body recibido:", body);

  return res.status(200).json({
    mensaje: "Obteniendo todos los registros de alimentación",
  });
};


const getFeedingById = (req, res) => {
  const { id } = req.params;

  return res.json({
    mensaje: `Obteniendo la alimentación con ID: ${id}`,
  });
};


const createFeeding = async (req, res) => {
  const { date, ovineId, food, quantity, observation } = req.body;

  let errors = [];

  if (!date || !ovineId || !food || !quantity || !observation) {
    errors.push("Todos los campos son obligatorios");
  }

  if (date === "") errors.push("El campo date no puede estar vacío");
  if (ovineId === "") errors.push("El campo ovineId no puede estar vacío");
  if (food === "") errors.push("El campo food no puede estar vacío");
  if (quantity === "") errors.push("El campo quantity no puede estar vacío");
  if (observation === "") errors.push("El campo observation no puede estar vacío");

  if (errors.length > 0) {
    const response = new Response(false, "Error al crear alimentación", errors);
    return res.status(400).json(response.json);
  }

  const data = {
    date,
    ovineId,
    food,
    quantity,
    observation
  };

  const feeding = await createFeedingService(data);

  const response = new Response(true, "Alimentación creada exitosamente", feeding);

  return res.status(201).json(response.json);
};


const updateFeeding = async (req, res) => {
  const { id } = req.params;

  const updatedFeeding = await updateFeedingService(id, req.body);

  return res.json({
    mensaje: `Alimentación actualizada con ID: ${id}`,
    feeding: updatedFeeding
  });
};


const deleteFeeding = (req, res) => {
  const { id } = req.params;

  return res.json({
    mensaje: `Inactivando alimentación con ID: ${id}`,
  });
};


module.exports = {
  getAllFeedings,
  getFeedingById,
  createFeeding,
  updateFeeding,
  deleteFeeding,
};