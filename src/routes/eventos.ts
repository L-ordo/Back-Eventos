import express from "express"
import { obtenerEventos, crearEvento, eliminarEvento } from "../controllers/eventosController"


const router = express.Router()

router.get("/", obtenerEventos)
router.post("/", crearEvento)
router.delete("/:id", eliminarEvento)

export default router
