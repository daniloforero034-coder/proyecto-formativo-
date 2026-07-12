const express = require('express');
const router = express.Router();

const {
    getAllBirths,
    getBirthById,
    createBirth,
    updateBirth,
    deleteBirth
} = require("../controllers/birthsController.js");

// Obtener todos los nacimientos
router.get("/birth", getAllBirths);

// Obtener nacimiento por ID
router.get("/birth/:id", getBirthById);

// Crear nacimiento
router.post("/birth", createBirth);

// Actualizar nacimiento
router.put("/birth/:id", updateBirth);

// Eliminar nacimiento
router.delete("/birth/:id", deleteBirth);

module.exports = router;