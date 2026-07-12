const ovine = require("../models/ovineModel");


// Crear ovino
const createOvine = async (data) => {
  try {
    const newOvine = await new ovine(data);
    return newOvine;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener todos los ovinos
const getAllOvines = async () => {
  try {
    const ovines = await ovine.findAll();
    return ovines;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener ovino por id
const getOvineById = async (id) => {
  try {
    const ovineid = await ovine.findOne({ where: { id } });
    return ovineid;
  } catch (error) {
    console.log(error);
  }
};


// Inactivar ovino
const deleteOvine = async (id) => {
  try {
    const deleteOvine = await ovine.destroy({ where: { id } });
    return deleteOvine;
  } catch (error) {
    console.log(error);
  }
};


// Actualizar ovino
const updateOvine = async (id, data) => {
  try {
    const updateOvine = await ovine.update(data, { where: { id } });
    return updateOvine;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  createOvine,
  getAllOvines,
  getOvineById,
  deleteOvine,
  updateOvine,
};                      