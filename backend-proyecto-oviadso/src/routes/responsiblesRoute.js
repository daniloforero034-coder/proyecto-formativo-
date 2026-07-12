const express = require('express');
const router = express.Router();

const {
    getAllResponsibles,
    getResponsibleById,
    createResponsible,
    updateResponsible,
    deleteResponsible
} = require("../controllers/responsiblesController.js");

// Obtener todos
router.get("/ResponsiblesAll", getAllResponsibles);

// Obtener por ID
router.get("/Responsibles/:id", getResponsibleById);

// Crear
router.post("/Responsibles", createResponsible);

// Actualizar
router.put("/Responsibles/:id", updateResponsible);

// Eliminar
router.delete("/Responsibles/:id", deleteResponsible);

module.exports = router;