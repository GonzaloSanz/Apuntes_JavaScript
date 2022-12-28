'use strict'

/*
 ***********************************************************
 *                                                         *
 *               Importar de otros archivos                *
 *                                                         *
 ***********************************************************

    - Es necesario poner type="module" al añadir el archivo .js en el HTML.
    - Se puede poner alias a las importaciones con 'as'.
    - La importación por defecto no necesita ir entre llaves, mientras que las otras sí.
*/

import nuevaFuncion, { nombreCliente as clienteNombre, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

// Variable de la ventana global
console.log(nombreVentana);

nuevaFuncion();

console.log(clienteNombre);
console.log(ahorro);
console.log(mostrarInformacion(clienteNombre, ahorro));

tieneSaldo(ahorro);


const cliente = new Cliente(clienteNombre, ahorro);
console.log(cliente);
console.log(cliente.mostrarInformacion());


const empresa = new Empresa('FC Barcelona', 3000, 'Deportes');
console.log(empresa);
console.log(empresa.mostrarInformacion());