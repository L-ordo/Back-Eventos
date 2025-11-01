import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import eventosRoutes from "./routes/eventos"


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const mongoUri = process.env.MONGO_URI as string
const port = process.env.PORT || 3000

mongoose.connect(mongoUri)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error("❌ Error al conectar a MongoDB:", err))

  app.use("/api/eventos", eventosRoutes)

app.listen(port, () => console.log(`🚀 Servidor en http://localhost:${port}`))
