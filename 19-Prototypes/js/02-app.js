'use strict'

// Constructores
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

// Funciones
function formatearCliente(cliente) {

    const { nombre, saldo } = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo} euros.`;
}

function formatearEmpresa(empresa) {

    const { nombre, saldo, categoria } = empresa;
    return `La empresa ${nombre} tiene un saldo de ${saldo} euros y pertenece a la categoría ${categoria}.`;
}

// Objetos
const juan = new Cliente('Juan', 500);

const FCB = new Empresa('FC Barcelona', 4000, 'Deportes');

console.log(formatearCliente(juan)); // El cliente Juan tiene un saldo de 500 euros.

console.log(formatearEmpresa(FCB)); // La empresa FC Barcelona tiene un saldo de 4000 euros y pertenece a la categoría Deportes.
