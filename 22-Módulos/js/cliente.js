'use strict'

/*
***********************************************************
*                                                         *
*                     ¿Qué es un IFFE?                    *
*                                                         *
***********************************************************

    - Significa 'Expresión de Función Ejecutada Inmediatamente'.
    - Mantiene funciones y variables de forma local, no existirán en otros archivos de JavaScript.
*/

    (function () {
        console.log('Desde un IFFE');
    })();

/*
 ***********************************************************
 *                                                         *
 *        Agregar una variable a la ventana global         *
 *                                                         *
 ***********************************************************
*/

/*
    window.variable

    - Agrega una variable a la ventana global, para poder ser llamada desde otros archivos de JavaScript.
*/

window.nombreVentana = 'Gonzalo';

/*
 ***********************************************************
 *                                                         *
 *                 Exportar a otros módulos                *
 *                                                         *
 ***********************************************************

    - Bastará con poner la palabra reservada export al comienzo.
    - El archivo que lo importe, debe tener la sintaxis import { exportacion } from 'rutaArchivo' Ej. import {nombreCliente, mostrarInformacion} from './cliente.js';
*/

// Exportar variables
export const nombreCliente = 'Gonzalo Sanz';
export const ahorro = 200;

// Exportar funciones
export function mostrarInformacion(nombreCliente, ahorro) {
    return `Cliente: ${nombreCliente} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if (ahorro > 0) {
        console.log('Tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}

// Exportar clases
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${nombreCliente} - Ahorro: ${ahorro}`;
    }
}

/*
 ***********************************************************
 *                                                         *
 *                  Exportación por defecto                *
 *                                                         *
 ***********************************************************

    - Se añade al principio export default.
    - El archivo que lo importe, no deberá utilizar las llaves para obtener lo exportado. Ej. import nuevaFuncion from './cliente.js';
    - Sólo puede existir uno por archivo.
    - Se puede dejar sin nombre, pero no es recomendable.
*/

export default function nuevaFuncion() {
    console.log('Éste es el export default');
}