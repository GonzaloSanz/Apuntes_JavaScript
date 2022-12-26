'use strict'

/*
 ***********************************************************
 *                                                         *
 *                    Crear un prototype                   *
 *                                                         *
 ***********************************************************
*/

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Prototype exclusivo de Cliente
Cliente.prototype.tipoCliente = function () { // No sirve la sintaxis de función flecha (function busca en el objeto actual y la función flecha en la ventana global)
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`; // Se puede hacer referencia a otros prototypes
}

Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira;
}

// Objeto
const gonzalo = new Cliente('Gonzalo', 6000);
console.log(gonzalo.nombreClienteSaldo()); // Nombre: Gonzalo, Saldo: 6000, Tipo Cliente: Platinum
gonzalo.retiraSaldo(1000);
console.log(gonzalo.nombreClienteSaldo()); // Nombre: Gonzalo, Saldo: 5000, Tipo Cliente: Normal
