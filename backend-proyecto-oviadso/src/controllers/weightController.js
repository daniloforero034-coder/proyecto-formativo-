const { 
  createWeight: createWeightService,
  updateWeight: updateWeightService
} = require("../services/weightService");

const { Response } = require("../functions/response");


const getAllWeights = (req, res) => {
  const body = req.body;

  console.log("Body recibido:", body);

  return res.status(200).json({
    mensaje: "Obteniendo todos los pesos",
  });
};


const getWeightById = (req, res) => {
  const { id } = req.params;

  return res.json({
    mensaje: `Obteniendo el peso con ID: ${id}`,
  });
};


const createWeight = async (req, res) => {

  const { date, animalId, weight, status } = req.body;

  let errors = [];

  if (!date || !animalId || !weight || !status) {
    errors.push("Todos los campos son obligatorios");
  }

  if (date == "") {
    errors.push("El campo date no puede estar vacío");
  }

  if (animalId == "") {
    errors.push("El campo animalId no puede estar vacío");
  }

  if (weight == "") {
    errors.push("El campo weight no puede estar vacío");
  }

  if (status == "") {
    errors.push("El campo status no puede estar vacío");
  }


  if (errors.length > 0) {

    const response = new Response(
      false,
      "Error al crear el peso",
      errors
    );

    return res.status(400).json(response.json);
  }


  const data = {
    date,
    animalId,
    weight,
    status
  };


  const weightCreated = await createWeightService(data);


  const response = new Response(
    true,
    "Peso creado exitosamente",
    weightCreated
  );


  return res.status(201).json(response.json);
};



const updateWeight = async (req, res) => {

  const { id } = req.params;

  const { date, animalId, weight, status } = req.body;


  const updatedWeight = await updateWeightService(id, {
    date,
    animalId,
    weight,
    status
  });


  return res.json({
    mensaje: `Peso actualizado con ID: ${id}`,
    weight: updatedWeight
  });

};



const deleteWeight = (req, res) => {

  const { id } = req.params;

  return res.json({
    mensaje: `Inactivando peso con ID: ${id}`,
  });

};



module.exports = {
  getAllWeights,
  getWeightById,
  createWeight,
  updateWeight,
  deleteWeight,
};