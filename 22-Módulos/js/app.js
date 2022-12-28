'use strict'

/*
 ***********************************************************
 *                                                         *
 *                   ¿Qué es un módulo?                    *
 *                                                         *
 ***********************************************************

    - Un módulo es solo un archivo. Un script es un módulo.
    - Los módulos pueden cargarse entre sí y usar directivas especiales (export e import) para intercambiar funcionalidad.
*/

/*
 ***********************************************************
 *                                                         *
 *                 Importar de otros módulos               *
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