import mongoose from "mongoose"

const eventoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  fecha: { type: String, required: true },
  hora: { type: String, required: true },
  ubicacion: { type: String, required: true },
  descripcion: { type: String }
})

export default mongoose.model("Evento", eventoSchema)
