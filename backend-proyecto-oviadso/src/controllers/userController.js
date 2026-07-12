const { createUserService } = require('../services/userService');
const { Response } = require("../functions/response");

const getAllUsers = (req, res) => {
  const body = req.body;
  console.log("Body recibido:", body);
  res.status(200).json({ mensaje: "Obteniendo todos los usuarios" });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  res.json({ mensaje: `Obteniendo el usuario con ID: ${id}` });
};

const Usercreate = async (req, res) => {
  const { username, email, password, documentId, postJob, role } = req.body;

  let errors = [];

  if (!username || !email || !password || !documentId || !postJob || !role) {
    errors.push("Todos los campos son obligatorios");
  }

  if (username === "") errors.push("El campo name no puede estar vacío");
  if (email === "") errors.push("El campo email no puede estar vacío");
  if (password === "") errors.push("El campo password no puede estar vacío");
  if (documentId === "") errors.push("El campo documentId no puede estar vacío");
  if (postJob === "") errors.push("El campo postJob no puede estar vacío");
  if (role === "") errors.push("El campo role no puede estar vacío");
  if (errors.length > 0) {
    const response = new Response(false, "Error al crear el usuario", errors);
    return res.status(400).json(response.json);
  }

  const data = { username, email, password, documentId,  postJob, role };

try {
  const user = await createUserService(data);
  
} catch (error) {
  console.error("Error al crear el usuario:", error);
}
  const response = new Response(true, "Usuario creado exitosamente", null);
  return res.status(201).json(response.json);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const updatedUser = updateUser(id, { name, email, password });

  res.json({ mensaje: `Usuario actualizado con ID: ${id}`, user: updatedUser });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  res.json({ mensaje: `inactivando el usuario con ID: ${id}` });
};

module.exports = {
  getAllUsers,
  getUserById,
  Usercreate,
  updateUser,
  deleteUser
};