const {
  createHealth: createHealthService,
  updateHealth: updateHealthService,
  getAllHealths,
  getHealthById,
  deleteHealth: deleteHealthService
} = require("./healthService.js");

const { Response } = require("../functions/response.js");


const getAllHealth = async (req, res) => {
  const healths = await getAllHealths();

  return res.status(200).json({
    mensaje: "Obteniendo todos los registros de salud",
    data: healths
  });
};


const getHealthByIdController = async (req, res) => {
  const { id } = req.params;

  const health = await getHealthById(id);

  return res.json({
    mensaje: `Obteniendo registro de salud con ID: ${id}`,
    data: health
  });
};


const createHealth = async (req, res) => {

  const data = req.body;

  let errors = [];

  if (!data.date || !data.ovineId || !data.status) {
    errors.push("Todos los campos son obligatorios");
  }


  if (errors.length > 0) {
    const response = new Response(
      false,
      "Error al crear health",
      errors
    );

    return res.status(400).json(response.json);
  }


  const health = await createHealthService(data);


  const response = new Response(
    true,
    "Health creado exitosamente",
    health
  );


  return res.status(201).json(response.json);

};



const updateHealth = async (req, res) => {

  const { id } = req.params;


  const updatedHealth = await updateHealthService(
    id,
    req.body
  );


  return res.json({
    mensaje: `Health actualizado con ID: ${id}`,
    data: updatedHealth
  });

};



const deleteHealth = async (req, res) => {

  const { id } = req.params;


  await deleteHealthService(id);


  return res.json({
    mensaje: `Health eliminado con ID: ${id}`
  });

};



module.exports = {
  getAllHealth,
  getHealthByIdController,
  createHealth,
  updateHealth,
  deleteHealth
};