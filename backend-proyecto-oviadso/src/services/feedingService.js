const feeding = require("../models/feedingModel");


// Crear alimentación
const createFeeding = async (data) => {
  try {
    const newFeeding = await feeding.create(data);
    return newFeeding;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener todas las alimentaciones
const getAllFeedings = async () => {
  try {
    const feedings = await feeding.findAll();
    return feedings;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener alimentación por id
const getFeedingById = async (id) => {
  try {
    const feedingid = await feeding.findOne({ where: { id } });
    return feedingid;
  } catch (error) {
    console.log(error);
  }
};


// Inactivar alimentación
const deleteFeeding = async (id) => {
  try {
    const deleteFeeding = await feeding.destroy({ where: { id } });
    return deleteFeeding;
  } catch (error) {
    console.log(error);
  }
};


// Actualizar alimentación
const updateFeeding = async (id, data) => {
  try {
    const updateFeeding = await feeding.update(data, { where: { id } });
    return updateFeeding;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  createFeeding,
  getAllFeedings,
  getFeedingById,
  deleteFeeding,
  updateFeeding,
};