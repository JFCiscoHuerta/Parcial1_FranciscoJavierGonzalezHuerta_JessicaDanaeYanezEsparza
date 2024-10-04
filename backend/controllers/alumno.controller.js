import { ModeloAlumnoReprobado } from "../models/alumno.model.js";

ModeloAlumnoReprobado.create(
    {
        nombre: 'Alfonso',
        apepat: 'Rodriguez',
        apemat: 'Figueroa',
        edad: 21,
        carrera: 'TIDSM'
    },
    {
        nombre: 'Daniel',
        apepat: 'Alexander',
        apemat: 'Dominguez',
        edad: 23,
        carrera: 'TIDSM'
    },
    {
        nombre: 'Moises',
        apepat: 'Cabrera',
        apemat: 'Montantes',
        edad: 23,
        carrera: 'IGDS'
    },
    {
        nombre: 'Edmundo Alessandro',
        apepat: 'Pilar',
        apemat: 'Rosas',
        edad: 23,
        carrera: 'Diseño Digital'
    },
    {
        nombre: 'Sandra',
        apepat: 'Aguilar',
        apemat: 'Flores',
        edad: 24,
        carrera: 'Ingenieria Mecanica'
    }
)

export const test = () => {
    console.log("El controlador funciona")
}