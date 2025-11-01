import { Request, Response } from "express"
import Evento from "../models/Evento"

export const obtenerEventos = async (_req: Request, res: Response) => {
  const eventos = await Evento.find()
  res.json(eventos)
}

export const crearEvento = async (req: Request, res: Response) => {
  const evento = new Evento(req.body)
  await evento.save()
  res.json(evento)
}

export const eliminarEvento = async (req: Request, res: Response) => {
  await Evento.findByIdAndDelete(req.params.id)
  res.json({ mensaje: "Evento eliminado" })
}
