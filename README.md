# 🎯 Back-Eventos

API REST desarrollada con **Node.js**, **Express**, **TypeScript** y **MongoDB**, diseñada para gestionar eventos con operaciones CRUD completas (crear, leer, actualizar y eliminar).

---

## 🧩 Tecnologías utilizadas

- **Node.js** + **Express** – Servidor backend
- **TypeScript** – Tipado estático y mejor mantenimiento
- **MongoDB** + **Mongoose** – Base de datos NoSQL
- **Docker** – Entorno de base de datos local
- **Dotenv** – Variables de entorno seguras
- **Cors** – Permite peticiones desde frontend externo
- **Nodemon** – Recarga automática en desarrollo

---

## ⚙️ Instalación y configuración

1️⃣ Clona el repositorio:

```bash
git clone https://github.com/L-ordonez10/Back-Eventos.git
cd Back-Eventos

npm install

```
```
back-eventos/
│
├── src/
│   ├── controllers/
│   │   └── eventosController.ts   # Lógica de controladores
│   ├── models/
│   │   └── Evento.ts              # Modelo de Mongoose
│   ├── routes/
│   │   └── eventos.ts             # Definición de rutas
│   └── server.ts                  # Configuración principal del servidor
│
├── .env                           # Variables de entorno (ignorado por git)
├── .gitignore                     # Archivos ignorados en el repo
├── package.json                   # Dependencias y scripts
├── tsconfig.json                  # Configuración de TypeScript
└── README.md                      # Documentación del proyecto
```