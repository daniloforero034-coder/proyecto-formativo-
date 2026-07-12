const express = require('express');
const router = express.Router();

const {
    getAllOvines,
    getOvineById,
    createOvine,
    updateOvine,
    deleteOvine
} = require("../controllers/ovineController.js");

// Obtener todos los ovinos
router.get("/ovino", getAllOvines);

// Obtener ovinos por ID
router.get("/ovino/:id", getOvineById);

// Crear ovino
router.post("/ovino", createOvine);

// Actualizar ovino
router.put("/ovino/:id", updateOvine);

// Eliminar ovino
router.delete("/ovino/:id", deleteOvine);

module.exports = router;