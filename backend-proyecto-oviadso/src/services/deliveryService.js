const delivery = require("../models/deliveryModel");


// Crear parto
const createDelivery = async (data) => {
  try {
    const newDelivery = await delivery.create(data);
    return newDelivery;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener todos los partos
const getAllDeliverys = async () => {
  try {
    const deliverys = await delivery.findAll();
    return deliverys;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener parto por id
const getDeliveryById = async (id) => {
  try {
    const deliveryid = await delivery.findOne({ where: { id } });
    return deliveryid;
  } catch (error) {
    console.log(error);
  }
};


// Inactivar parto
const deleteDelivery = async (id) => {
  try {
    const deleteDelivery = await delivery.destroy({ where: { id } });
    return deleteDelivery;
  } catch (error) {
    console.log(error);
  }
};


// Actualizar parto
const updateDelivery = async (id, data) => {
  try {
    const updateDelivery = await delivery.update(data, { where: { id } });
    return updateDelivery;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  createDelivery,
  getAllDeliverys,
  getDeliveryById,
  deleteDelivery,
  updateDelivery,
};