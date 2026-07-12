const {
  createBirth: createBirthService,
  updateBirth: updateBirthService
} = require("../services/birthService.js");

const { Response } = require("../functions/response");


const getAllBirths = (req, res) => {
  const body = req.body;

  console.log("Body recibido:", body);

  return res.status(200).json({
    mensaje: "Obteniendo todos los registros de nacimientos",
  });
};


const getBirthById = (req, res) => {
  const { id } = req.params;

  return res.json({
    mensaje: `Obteniendo el nacimiento con ID: ${id}`,
  });
};


const createBirth = async (req, res) => {

  const {
    date,
    motherId,
    fatherId,
    calfId,
    gender,
    weight
  } = req.body;

  let errors = [];

  if (!date || !motherId || !fatherId || !calfId || !gender || !weight) {
    errors.push("Todos los campos son obligatorios");
  }

  if (date === "") errors.push("El campo date no puede estar vacío");
  if (motherId === "") errors.push("El campo motherId no puede estar vacío");
  if (fatherId === "") errors.push("El campo fatherId no puede estar vacío");
  if (calfId === "") errors.push("El campo calfId no puede estar vacío");
  if (gender === "") errors.push("El campo gender no puede estar vacío");
  if (weight === "") errors.push("El campo weight no puede estar vacío");

  if (errors.length > 0) {
    const response = new Response(false, "Error al crear nacimiento", errors);
    return res.status(400).json(response.json);
  }

  const data = {
    date,
    motherId,
    fatherId,
    calfId,
    gender,
    weight
  };

  const birth = await createBirthService(data);

  const response = new Response(true, "Nacimiento registrado exitosamente", birth);

  return res.status(201).json(response.json);
};


const updateBirth = async (req, res) => {

  const { id } = req.params;

  const updatedBirth = await updateBirthService(id, req.body);

  return res.json({
    mensaje: `Nacimiento actualizado con ID: ${id}`,
    birth: updatedBirth,
  });
};


const deleteBirth = (req, res) => {

  const { id } = req.params;

  return res.json({
    mensaje: `Inactivando nacimiento con ID: ${id}`,
  });
};


module.exports = {
  getAllBirths,
  getBirthById,
  createBirth,
  updateBirth,
  deleteBirth,
};