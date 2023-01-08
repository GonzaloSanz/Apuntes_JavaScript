'use strict'

/*
***********************************************************
*                                                         *
*                    Factory Pattern                      *
*                                                         *
***********************************************************

    - Crea objetos basados en cierta condiciones.
*/

class InputHTML {
    constructor(type, nombre) {
        this.type = type;
        this.nombre = nombre;
    }

    crearInput() {
        return `<input type='${this.type}' name='${this.nombre}' id='${this.nombre}'`;
    }
}

class HTMLFactory {
    crearElemento(tipo, nombre) {
        switch(tipo) {
            case 'text':
                return new InputHTML('text', nombre);

            case 'tel':
                return new InputHTML('tel', nombre);
            
            case 'email':
                return new InputHTML('email', nombre);

            default:
                return;
        }
    }
}

const elemento = new HTMLFactory();
const input = elemento.crearElemento('text', 'nombre-cliente');
console.log(input);

const elemento2 = new HTMLFactory();
const input2 = elemento2.crearElemento('tel', 'telefono-cliente');
console.log(input2);

const elemento3 = new HTMLFactory();
const input3 = elemento3.crearElemento('email', 'email-cliente');
console.log(input3);