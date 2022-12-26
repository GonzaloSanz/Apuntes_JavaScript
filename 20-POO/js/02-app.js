'use strict'

/*
 ***********************************************************
 *                                                         *
 *                     Métodos de clase                    *
 *                                                         *
 ***********************************************************

    - Los métodos son muy similares a los prototypes.
*/

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Método
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo} euros.`;
    }

    // Método estático (pertenece a la clase, no al objeto)
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

const gonzalo = new Cliente('Gonzalo', 500);
console.log(gonzalo.mostrarInformacion());

// Llamar al método estático
console.log(Cliente.bienvenida());
