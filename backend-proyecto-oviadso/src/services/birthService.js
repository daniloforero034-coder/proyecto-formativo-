const birth = require("../models/birthModel");


// Crear nacimiento
const createBirth = async (data) => {
  try {
    const newBirth = await birth.create(data);
    return newBirth;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener todos los nacimientos
const getAllBirths = async () => {
  try {
    const births = await birth.findAll();
    return births;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener nacimiento por id
const getBirthById = async (id) => {
  try {
    const birthid = await birth.findOne({ where: { id } });
    return birthid;
  } catch (error) {
    console.log(error);
  }
};


// Inactivar nacimiento
const deleteBirth = async (id) => {
  try {
    const deleteBirth = await birth.destroy({ where: { id } });
    return deleteBirth;
  } catch (error) {
    console.log(error);
  }
};


// Actualizar nacimiento
const updateBirth = async (id, data) => {
  try {
    const updateBirth = await birth.update(data, { where: { id } });
    return updateBirth;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  createBirth,
  getAllBirths,
  getBirthById,
  deleteBirth,
  updateBirth,
};