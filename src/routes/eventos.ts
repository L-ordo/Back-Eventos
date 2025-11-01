import express from "express"
import { body } from "express-validator"
import { obtenerEventos, crearEvento, eliminarEvento, actualizarEvento } from "../controllers/eventosController"

const router = express.Router()



router.get("/", obtenerEventos)

router.post(
    "/",
    [
        body("titulo").notEmpty().withMessage("El título es obligatorio"),
        body("fecha").notEmpty().withMessage("La fecha es obligatoria"),
        body("hora").notEmpty().withMessage("La hora es obligatoria"),
        body("ubicacion").notEmpty().withMessage("La ubicación es obligatoria"),
    ],
    crearEvento
)

router.put("/:id", actualizarEvento)
router.delete("/:id", eliminarEvento)



export default router
