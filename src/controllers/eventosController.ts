import { Request, Response } from "express"
import { validationResult } from "express-validator"
import Evento from "../models/Evento"

export const obtenerEventos = async (_req: Request, res: Response) => {
  try {
    const eventos = await Evento.find()
    res.status(200).json(eventos)
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener eventos", error })
  }
}

export const crearEvento = async (req: Request, res: Response) => {
  const errores = validationResult(req)
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() })
  }

  try {
    const evento = new Evento(req.body)
    await evento.save()
    res.status(201).json(evento)
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear evento", error })
  }
}

export const eliminarEvento = async (req: Request, res: Response) => {
  try {
    await Evento.findByIdAndDelete(req.params.id)
    res.json({ mensaje: "Evento eliminado" })
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar evento", error })
  }
}


export const actualizarEvento = async (req: Request, res: Response) => {
  try {
    const evento = await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!evento) return res.status(404).json({ mensaje: "Evento no encontrado" })
    res.json(evento)
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar evento", error })
  }
}
