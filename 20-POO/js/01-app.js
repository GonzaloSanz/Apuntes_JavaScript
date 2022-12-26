'use strict'

/*
 ***********************************************************
 *                                                         *
 *                   Declaración de clase                  *
 *                                                         *
 ***********************************************************

    - Las clases siempre empiezan por mayúscula.
*/

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

/*
 ***********************************************************
 *                                                         *
 *                    Expresión de clase                   *
 *                                                         *
 ***********************************************************

    - Forma menos común.
*/

const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

/*
 ***********************************************************
 *                                                         *
 *                  Instanciar una clase                   *
 *                                                         *
 ***********************************************************
*/

const gonzalo = new Cliente('Gonzalo', 500);
const juan = new Cliente2('Juan', 780);
