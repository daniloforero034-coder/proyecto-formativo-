const responsibleModel = require("../models/responsiblesModel.js");

// Crear responsable
const createResponsible = async (data) => {
  try {
    return await responsibleModel.create(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Obtener todos
const getAllResponsibles = async () => {
  try {
    return await responsibleModel.findAll();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Obtener por ID
const getResponsibleById = async (id) => {
  try {
    return await responsibleModel.findOne({ where: { id } });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Eliminar
const deleteResponsible = async (id) => {
  try {
    return await responsibleModel.destroy({ where: { id } });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Actualizar
const updateResponsible = async (id, data) => {
  try {
    await responsibleModel.update(data, { where: { id } });

    return await responsibleModel.findOne({ where: { id } });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createResponsible,
  getAllResponsibles,
  getResponsibleById,
  deleteResponsible,
  updateResponsible,
};