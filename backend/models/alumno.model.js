import { Schema, model } from "mongoose";

const EsquemaAlumnoReprobado = new Schema({
    nombre: {
        type: String
    },
    apepat: {
        type: String
    },
    apemat: {
        type: String
    },
    edad: {
        type: Number
    },
    carrera: {
        type: String
    }
})

export const ModeloAlumnoReprobado = new model("Tabla de alumnos reprobados", EsquemaAlumnoReprobado)