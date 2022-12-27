'use strict'

/*
 ***********************************************************
 *                                                         *
 *   ¿Qué es la Programación Orientada a Objetos (POO)?    *
 *                                                         *
 ***********************************************************

    - Es un paradigma de programación, es decir, un modelo o estilo de programación.
    - Se basa en el concepto de clases y objetos. 
    - Este tipo de programación se utiliza para estructurar un programa de software en piezas 
    simples y reutilizables de planos de código (clases), para crear instancias individuales de objetos. 
*/

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
