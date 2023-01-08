'use strict'

/*
***********************************************************
*                                                         *
*              ¿Qué es un patrón de diseño?               *
*                                                         *
***********************************************************

    - Es un plano que se puede personalizar para resolver un problema en el diseño del código.
    - Categorías:
        + Creación: Permite crear objetos y la reutilización de código.
        + Estructura: Explica como deben comunicarse los objetos y clases de grandes proyectos.
        + Comportamiento: Define como se comportan y comunican los objetos.
*/

/*
***********************************************************
*                                                         *
*                       Class pattern                     *
*                                                         *
***********************************************************
*/

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Gonzalo', 'gonzalo@gmail.com');
console.log(persona);