'use strict'

/*
 ***********************************************************
 *                                                         *
 *                     Heredar prototypes                  *
 *                                                         *
 ***********************************************************
*/

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
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
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira;
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo); // Heredar nombre y saldo de Cliente
    this.telefono = telefono;
}

// Pasar funciones de un prototype a otro (Heredar)
// Debe ser antes de crear una instancia de la clase
Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.constructor = Cliente;

Persona.prototype.mostrarTelefono = function () {
    return `El teléfono de esta persona es ${this.telefono}`;
}

// Objeto
const gonzalo = new Persona('Gonzalo', 5000, 678594403);

console.log(gonzalo);
console.log(gonzalo.nombreClienteSaldo());
console.log(gonzalo.mostrarTelefono());