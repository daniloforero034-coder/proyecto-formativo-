const weight = require("../models/weightModel");


// Crear peso
const createWeight = async (data) => {
  try {
    const newWeight = await new weight(data);
    return newWeight;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener todos los pesos
const getAllWeights = async () => {
  try {
    const weights = await weight.findAll();
    return weights;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener peso por id
const getWeightById = async (id) => {
  try {
    const weightid = await weight.findOne({ where: { id } });
    return weightid;
  } catch (error) {
    console.log(error);
  }
};


// Inactivar peso
const deleteWeight = async (id) => {
  try {
    const deleteWeight = await weight.destroy({ where: { id } });
    return deleteWeight;
  } catch (error) {
    console.log(error);
  }
};


// Actualizar peso
const updateWeight = async (id, data) => {
  try {
    const updateWeight = await weight.update(data, { where: { id } });
    return updateWeight;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  createWeight,
  getAllWeights,
  getWeightById,
  deleteWeight,
  updateWeight,
};