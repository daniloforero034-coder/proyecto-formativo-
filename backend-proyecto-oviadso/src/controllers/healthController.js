const {
  createHealth: createHealthService,
  updateHealth: updateHealthService
} = require("../services/healthService.js");

const { Response } = require("../functions/response");


const getAllHealths = (req, res) => {

  const body = req.body;

  console.log("Body recibido:", body);

  return res.status(200).json({
    mensaje: "Obteniendo todos los registros de salud",
  });

};


const getHealthById = (req, res) => {

  const { id } = req.params;

  return res.json({
    mensaje: `Obteniendo el registro de salud con ID: ${id}`,
  });

};


const createHealth = async (req, res) => {

  const { date, ovineId, disease, treatment, status } = req.body;

  let errors = [];


  if (!date || !ovineId || !disease || !treatment || !status) {
    errors.push("Todos los campos son obligatorios");
  }


  if (date == "") errors.push("El campo date no puede estar vacío");
  if (ovineId == "") errors.push("El campo ovineId no puede estar vacío");
  if (disease == "") errors.push("El campo disease no puede estar vacío");
  if (treatment == "") errors.push("El campo treatment no puede estar vacío");
  if (status == "") errors.push("El campo status no puede estar vacío");


  if (errors.length > 0) {

    const response = new Response(
      false,
      "Error al crear registro de salud",
      errors
    );

    return res.status(400).json(response.json);

  }


  const data = {
    date,
    ovineId,
    disease,
    treatment,
    status
  };


  const health = await createHealthService(data);


  const response = new Response(
    true,
    "Registro de salud creado exitosamente",
    health
  );


  return res.status(201).json(response.json);

};



const updateHealth = async (req, res) => {

  const { id } = req.params;

  const { date, ovineId, disease, treatment, status } = req.body;


  const updatedHealth = await updateHealthService(id, {
    date,
    ovineId,
    disease,
    treatment,
    status
  });


  return res.json({
    mensaje: `Registro de salud actualizado con ID: ${id}`,
    health: updatedHealth
  });

};



const deleteHealth = (req, res) => {

  const { id } = req.params;

  return res.json({
    mensaje: `Inactivando registro de salud con ID: ${id}`,
  });

};


module.exports = {
  getAllHealths,
  getHealthById,
  createHealth,
  updateHealth,
  deleteHealth,
};