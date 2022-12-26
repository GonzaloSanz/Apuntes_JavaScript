'use strict'

/*
 ***********************************************************
 *                                                         *
 *                    Herencia de clases                   *
 *                                                         *
 ***********************************************************

    - Una clase hereda de otra sus constructores, métodos y atributos.
*/

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo} euros.`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo); // super() va a la clase padre y busca allí los atributos facilitados.
        this.telefono = telefono;
        this.categoria = categoria;
    }

    // En caso de repetir el nombre del método heredado, se sobrescribe
    static bienvenida() {
        return `Bienvenido al cajero de empresas`;
    }
}

const gonzalo = new Cliente('Gonzalo', 500);
const empresa = new Empresa('FC Barcelona', 500, 678594302, 'Deportes');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());

// Método sobrescrito
console.log(Empresa.bienvenida());