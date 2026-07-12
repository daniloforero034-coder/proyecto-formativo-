const mortality = require("../models/mortalityModel");


// Crear mortalidad
const createMortality = async (data) => {
  try {
    const newMortality = await mortality.create(data);
    return newMortality;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener todas las mortalidades
const getAllMortalities = async () => {
  try {
    const mortalities = await mortality.findAll();
    return mortalities;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener mortalidad por id
const getMortalityById = async (id) => {
  try {
    const mortalityid = await mortality.findOne({ where: { id } });
    return mortalityid;
  } catch (error) {
    console.log(error);
  }
};


// Inactivar mortalidad
const deleteMortality = async (id) => {
  try {
    const deleteMortality = await mortality.destroy({ where: { id } });
    return deleteMortality;
  } catch (error) {
    console.log(error);
  }
};


// Actualizar mortalidad
const updateMortality = async (id, data) => {
  try {
    const updateMortality = await mortality.update(data, { where: { id } });
    return updateMortality;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  createMortality,
  getAllMortalities,
  getMortalityById,
  deleteMortality,
  updateMortality,
};