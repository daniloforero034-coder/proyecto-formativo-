const mounting = require("../models/mountingModel");


// Crear monta
const createMounting = async (data) => {
  try {
    const newMounting = await new mounting(data);
    return newMounting;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener todas las montas
const getAllMountings = async () => {
  try {
    const mountings = await mounting.findAll();
    return mountings;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener monta por id
const getMountingById = async (id) => {
  try {
    const mountingid = await mounting.findOne({ where: { id } });
    return mountingid;
  } catch (error) {
    console.log(error);
  }
};


// Inactivar monta
const deleteMounting = async (id) => {
  try {
    const deleteMounting = await mounting.destroy({ where: { id } });
    return deleteMounting;
  } catch (error) {
    console.log(error);
  }
};


// Actualizar monta
const updateMounting = async (id, data) => {
  try {
    const updateMounting = await mounting.update(data, { where: { id } });
    return updateMounting;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  createMounting,
  getAllMountings,
  getMountingById,
  deleteMounting,
  updateMounting,
};   