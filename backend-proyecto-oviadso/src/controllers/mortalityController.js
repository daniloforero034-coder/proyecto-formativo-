const { Response } = require("../functions/response");
const {
  createMortality: createMortalityService,
  updateMortality: updateMortalityService
} = require('../services/mortalityService.js');

const getAllMortalities = (req, res) => {
  const body = req.body;
  console.log("Body recibido:", body);

  return res.status(200).json({
    mensaje: "Obteniendo todas las mortalidades"
  });
};

const getMortalityById = (req, res) => {
  const { id } = req.params;

  return res.json({
    mensaje: `Obteniendo la mortalidad con ID: ${id}`
  });
};

const createMortality = async (req, res) => {
  const { date, ovineId, cause, description } = req.body;

  let errors = [];

  if (!date || !ovineId || !cause || !description) {
    errors.push("Todos los campos son obligatorios");
  }

  if (date === "") errors.push("El campo date no puede estar vacío");
  if (ovineId === "") errors.push("El campo ovineId no puede estar vacío");
  if (cause === "") errors.push("El campo cause no puede estar vacío");
  if (description === "") errors.push("El campo description no puede estar vacío");

  if (errors.length > 0) {
    const response = new Response(false, "Error al crear la mortalidad", errors);
    return res.status(400).json(response.json);
  }

  const data = { date, ovineId, cause, description };

  const mortality = await createMortalityService(data);

  const response = new Response(true, "Mortalidad registrada exitosamente", mortality);

  return res.status(201).json(response.json);
};

const updateMortality = async (req, res) => {
  const { id } = req.params;
  const { date, ovineId, cause, description } = req.body;

  const updatedMortality = await updateMortalityService(id, {
    date,
    ovineId,
    cause,
    description
  });

  return res.json({
    mensaje: `Mortalidad actualizada con ID: ${id}`,
    mortality: updatedMortality
  });
};

const deleteMortality = (req, res) => {
  const { id } = req.params;

  return res.json({
    mensaje: `Eliminando registro de mortalidad con ID: ${id}`
  });
};

module.exports = {
  getAllMortalities,
  getMortalityById,
  createMortality,
  updateMortality,
  deleteMortality
};