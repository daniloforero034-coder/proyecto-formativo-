const responsibles = require("../services/responsiblesService.js");
const { Response } = require("../functions/response");


// Crear responsable
const createResponsible = async (req, res) => {
  try {
    const data = req.body;

    let errors = [];

    if (!data.name || !data.email || !data.documentId) {
      errors.push("Todos los campos son obligatorios");
    }

    if (errors.length > 0) {
      const response = new Response(false, "Error al crear responsable", errors);
      return res.status(400).json(response.json);
    }

    const responsible = await responsibles.createResponsible(data);

    const response = new Response(
      true,
      "Responsable creado exitosamente",
      responsible
    );

    return res.status(201).json(response.json);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mensaje: "Error interno del servidor"
    });
  }
};


// Obtener todos
const getAllResponsibles = async (req, res) => {
  try {
    const data = await responsibles.getAllResponsibles();

    return res.status(200).json({
      mensaje: "Lista de responsables",
      data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mensaje: "Error interno del servidor"
    });
  }
};


// Obtener por ID
const getResponsibleById = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await responsibles.getResponsibleById(id);

    return res.json({
      mensaje: `Responsable con ID: ${id}`,
      data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mensaje: "Error interno del servidor"
    });
  }
};


// Actualizar
const updateResponsible = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await responsibles.updateResponsible(id, req.body);

    return res.json({
      mensaje: `Responsable actualizado con ID: ${id}`,
      data: updated
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mensaje: "Error interno del servidor"
    });
  }
};


// Eliminar
const deleteResponsible = async (req, res) => {
  try {
    const { id } = req.params;

    await responsibles.deleteResponsible(id);

    return res.json({
      mensaje: `Responsable eliminado con ID: ${id}`
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mensaje: "Error interno del servidor"
    });
  }
};


module.exports = {
  createResponsible,
  getAllResponsibles,
  getResponsibleById,
  updateResponsible,
  deleteResponsible
};