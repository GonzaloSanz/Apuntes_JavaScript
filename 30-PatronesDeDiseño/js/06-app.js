'use strict'

/*
***********************************************************
*                                                         *
*                      Mixin Pattern                      *
*                                                         *
***********************************************************

    - Compartir funciones externas entre diferentes clases.
*/

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funciones = {
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

// Añadir funcionesPersona a la clase Persona
Object.assign(Persona.prototype, funciones);
Object.assign(Cliente.prototype, funciones);

const persona = new Persona('Gonzalo', 'gonzalo@gmail.com');
console.log(persona);

persona.mostrarInformacion();
persona.mostrarNombre();

const cliente = new Persona('Juan', 'juan@hotmail.es');
console.log(cliente);

cliente.mostrarInformacion();
cliente.mostrarNombre();