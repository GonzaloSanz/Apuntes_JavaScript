'use strict'

/*
 ***********************************************************
 *                                                         *
 *                    ¿Qué es una clase?                   *
 *                                                         *
 ***********************************************************

    - Es un elemento de la programación orientada a objetos que actúa como una plantilla y
    va a definir las características y comportamientos de una entidad.
    - La clase puede tener un método llamado constructor, que se va a llamar cada vez que se cree un objeto de esa clase. 
    - El constructor se utiliza generalmente para inicializar los atributos de los objetos.
*/

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
 *                   ¿Qué es un objeto?                    *
 *                                                         *
 ***********************************************************

    - Un objeto es una instancia de una clase. 
*/

const gonzalo = new Cliente('Gonzalo', 500);
const juan = new Cliente2('Juan', 780);
