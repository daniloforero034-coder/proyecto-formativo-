const user = require("../models/userModel");

// Obtener todos
const getAllUsers = async () => {
  try {
    return await user.findAll();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Obtener por ID
const getUserById = async (id) => {
  try {
    return await user.findOne({ where: { id } });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Crear usuario
const createUserService = async (data) => {
  try {
    return await user.create(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Actualizar usuario
const updateUser = async (id, data) => {
  try {
    return await user.update(data, { where: { id } });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Eliminar usuario (soft/hard según modelo)
const deleteUser = async (id) => {
  try {
    return await user.destroy({ where: { id } });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUserService,
  updateUser,
  deleteUser
};