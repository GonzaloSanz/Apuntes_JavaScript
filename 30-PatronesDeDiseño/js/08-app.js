'use strict'

/*
***********************************************************
*                                                         *
*                     Mediator Pattern                    *
*                                                         *
***********************************************************

    - Comunicarse con diferentes objetos a la vez.
*/

// En este ejemplo, Subasta actuaría como mediador entre los objetos Vendedor y Comprador

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente artículo: ${articulo}, iniciamos con un precio de ${precio} euros.`);
    },
    vendido: comprador => {
        console.log(`Vendido al comprador ${comprador}.`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} ofrece ${cantidad} euros.`);
    }
}

function Subasta() {
    let compradores = [];

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this; // Asigna la propia subasta como la sala
        }
    }
}

// Definir los objetos
const gonzalo = new Comprador('Gonzalo');
const juan = new Comprador('Juan');
const vendedor = new Vendedor('Vendedor de Coches');
const subasta = new Subasta();

// Subasta registra los compradores y el vendedor
subasta.registrar(gonzalo);
subasta.registrar(juan);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 600);

gonzalo.oferta(700, gonzalo);
juan.oferta(950, juan);
gonzalo.oferta(1100, gonzalo);
juan.oferta(1300, juan);

vendedor.vendido('Juan');
