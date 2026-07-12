const {
  createOvine: createOvineService,
  updateOvine: updateOvineService,
} = require("../services/ovineService.js");

const { Response } = require("../functions/response");

const getAllOvines = (req, res) => {
  res.status(200);

  res.json({
    mensaje: "Obteniendo todos los ovinos",
  });
};

const getOvineById = (req, res) => {
  const { id } = req.params;

  res.json({
    mensaje: `Obteniendo el ovino con ID: ${id}`,
  });
};

// CREAR OVINO
const createOvine = async (req, res) => {
  const { name, breed, gender, birthDate, weight, responsibleId } = req.body;

  let errors = [];

  // Campos obligatorios

  if (!name) {
    errors.push("El nombre es obligatorio");
  }

  if (!breed) {
    errors.push("La raza es obligatoria");
  }

  if (!gender) {
    errors.push("El sexo es obligatorio");
  }

  if (!birthDate) {
    errors.push("La fecha de nacimiento es obligatoria");
  }

  if (!weight) {
    errors.push("El peso es obligatorio");
  }

  if (!responsibleId) {
    errors.push("El responsable es obligatorio");
  }

  // Campos vacíos

  if (name?.trim() === "") {
    errors.push("El nombre no puede estar vacío");
  }

  if (breed?.trim() === "") {
    errors.push("La raza no puede estar vacía");
  }

  if (gender?.trim() === "") {
    errors.push("El sexo no puede estar vacío");
  }

  // Validar peso solo números

  if (weight && isNaN(weight)) {
    errors.push("El peso debe ser un número");
  }

  // Validar sexo

  if (gender && gender !== "Macho" && gender !== "Hembra") {
    errors.push("El sexo debe ser Macho o Hembra");
  }

  if (errors.length > 0) {
    const response = new Response(false, "Error al crear ovino", errors);

    return res.status(400).json(response.json);
  }

  const data = {
    name,
    breed,
    gender,
    birthDate,
    weight,
    responsibleId,
  };

  const ovine = await createOvineService(data);

  const response = new Response(true, "Ovino creado exitosamente", ovine);

  res.status(201);

  res.json(response.json);
};

// ACTUALIZAR OVINO

const updateOvine = async (req, res) => {
  const { id } = req.params;

  const { name, breed, gender, birthDate, weight, responsibleId } = req.body;

  let errors = [];

  if (!name || !breed || !gender || !birthDate || !weight || !responsibleId) {
    errors.push("Todos los campos son obligatorios");
  }

  if (weight && isNaN(weight)) {
    errors.push("El peso debe ser un número");
  }

  if (gender && gender !== "Macho" && gender !== "Hembra") {
    errors.push("Sexo inválido");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors,
    });
  }

  const updatedOvine = await updateOvineService(id, {
    name,
    breed,
    gender,
    birthDate,
    weight,
    responsibleId,
  });

  res.json({
    mensaje: `Ovino actualizado con ID: ${id}`,

    ovine: updatedOvine,
  });
};

// ELIMINAR OVINO

const deleteOvine = (req, res) => {
  const { id } = req.params;

  res.json({
    mensaje: `Inactivando ovino con ID: ${id}`,
  });
};

module.exports = {
  getAllOvines,
  getOvineById,
  createOvine,
  updateOvine,
  deleteOvine,
};
