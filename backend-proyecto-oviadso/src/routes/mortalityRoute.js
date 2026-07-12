const express = require('express');
const router = express.Router();

const {
    getAllMortalities,
    getMortalityById,
    createMortality,
    updateMortality,
    deleteMortality
} = require("../controllers/mortalityController.js");

// Obtener todos los registros de mortalidad
router.get("/mortality", getAllMortalities);

// Obtener registro de mortalidad por ID
router.get("/mortality/:id", getMortalityById);

// Crear registro de mortalidad
router.post("/mortality", createMortality);

// Actualizar registro de mortalidad
router.put("/mortality/:id", updateMortality);

// Eliminar registro de mortalidad
router.delete("/mortality/:id", deleteMortality);

module.exports = router;