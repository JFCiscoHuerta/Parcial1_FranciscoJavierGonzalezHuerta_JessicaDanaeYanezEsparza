import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/alumno.controller.js"

dotenv.config()

mongoose.connect(process.env.urlBase)
    .then(() => console.log("Conexion Exitosa"))
    .catch((err) => console.log("La conexion a la base de datos fallo", err))

const app = express()
app.use(cors)
app.listen(4000, 
    () => console.log("Servidor Lanzado Exitosamente"))

test()