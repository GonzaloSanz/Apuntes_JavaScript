'use strict'

/*
***********************************************************
*                                                         *
*                     Singleton Pattern                   *
*                                                         *
***********************************************************

    - Restringe la creación de instancias de una clase a una sola.
*/

let instancia = null;

class Persona {
    constructor(nombre, email) {
        if(!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;

        } else {
            return instancia;
        }
    }
}

const persona = new Persona('Gonzalo', 'gonzalo@gmail.com');
console.log(persona);

const persona2 = new Persona('Juan', 'juan@hotmail.es');
console.log(persona2); // Mismos datos que la primera persona