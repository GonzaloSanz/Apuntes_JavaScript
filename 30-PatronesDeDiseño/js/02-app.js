'use strict'

/*
***********************************************************
*                                                         *
*                   Constructor Pattern                   *
*                                                         *
***********************************************************
*/

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona('Gonzalo', 'gonzalo@gmail.com');
console.log(persona);

const cliente = new Cliente('Juan', 'juan@hotmail.es', 'Mercadona');
console.log(cliente);