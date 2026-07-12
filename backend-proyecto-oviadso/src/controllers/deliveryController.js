const { Response } = require("../functions/response");
const {
  createDelivery: createDeliveryService,
  updateDelivery: updateDeliveryService,
} = require("../services/deliveryService.js");

const getAllDeliveries = (req, res) => {
  const body = req.body;
  console.log("Body recibido:", body);

  return res.status(200).json({
    mensaje: "Obteniendo todos los registros de partos",
  });
};

const getDeliveryById = (req, res) => {
  const { id } = req.params;

  return res.json({
    mensaje: `Obteniendo el parto con ID: ${id}`,
  });
};

const createDelivery = async (req, res) => {
  const { date, motherId, offspring, gender, status } = req.body;

  let errors = [];

  if (!date || !motherId || !offspring || !gender || !status) {
    errors.push("Todos los campos son obligatorios");
  }

  if (date === "") errors.push("El campo date no puede estar vacío");
  if (motherId === "") errors.push("El campo motherId no puede estar vacío");
  if (offspring === "") errors.push("El campo offspring no puede estar vacío");
  if (gender === "") errors.push("El campo gender no puede estar vacío");
  if (status === "") errors.push("El campo status no puede estar vacío");

  if (errors.length > 0) {
    const response = new Response(false, "Error al crear registro de parto", errors);
    return res.status(400).json(response.json);
  }

  const data = { date, motherId, offspring, gender, status };

  const delivery = await createDeliveryService(data);

  const response = new Response(true, "Parto registrado exitosamente", delivery);

  return res.status(201).json(response.json);
};

const updateDelivery = async (req, res) => {
  const { id } = req.params;
  const { date, motherId, offspring, gender, status } = req.body;

  const updatedDelivery = await updateDeliveryService(id, {
    date,
    motherId,
    offspring,
    gender,
    status,
  });

  return res.json({
    mensaje: `Parto actualizado con ID: ${id}`,
    delivery: updatedDelivery,
  });
};

const deleteDelivery = (req, res) => {
  const { id } = req.params;

  return res.json({
    mensaje: `Inactivando registro de parto con ID: ${id}`,
  });
};

module.exports = {
  getAllDeliveries,
  getDeliveryById,
  createDelivery,
  updateDelivery,
  deleteDelivery,
};