const { Response } = require("../functions/response");
const {
  createMounting: createMountingService,
  updateMounting: updateMountingService
} = require("../services/mountingService.js");

const getAllMountings = (req, res) => {
  const body = req.body;
  console.log("Body recibido:", body);

  return res.status(200).json({
    mensaje: "Obteniendo todas las montas",
  });
};

const getMountingById = (req, res) => {
  const { id } = req.params;

  return res.json({
    mensaje: `Obteniendo la monta con ID: ${id}`,
  });
};

const createMounting = async (req, res) => {
  const { date, maleId, femaleId, status } = req.body;

  let errors = [];

  if (!date || !maleId || !femaleId || !status) {
    errors.push("Todos los campos son obligatorios");
  }

  if (date === "") errors.push("El campo date no puede estar vacío");
  if (maleId === "") errors.push("El campo maleId no puede estar vacío");
  if (femaleId === "") errors.push("El campo femaleId no puede estar vacío");
  if (status === "") errors.push("El campo status no puede estar vacío");

  if (errors.length > 0) {
    const response = new Response(false, "Error al crear la monta", errors);
    return res.status(400).json(response.json);
  }

  const data = { date, maleId, femaleId, status };

  const mounting = await createMountingService(data);

  const response = new Response(true, "Monta creada exitosamente", mounting);

  return res.status(201).json(response.json);
};

const updateMounting = async (req, res) => {
  const { id } = req.params;
  const { date, maleId, femaleId, status } = req.body;

  const updatedMounting = await updateMountingService(id, {
    date,
    maleId,
    femaleId,
    status,
  });

  return res.json({
    mensaje: `Monta actualizada con ID: ${id}`,
    mounting: updatedMounting,
  });
};

const deleteMounting = (req, res) => {
  const { id } = req.params;

  return res.json({
    mensaje: `Inactivando monta con ID: ${id}`,
  });
};

module.exports = {
  getAllMountings,
  getMountingById,
  createMounting,
  updateMounting,
  deleteMounting,
};