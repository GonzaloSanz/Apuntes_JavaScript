'use strict'

/*
***********************************************************
*                                                         *
*          Funciones que devuelven otras funciones        *
*                                                         *
***********************************************************
*/

const obtenerCliente = () => () => console.log('Gonzalo');

const funcion = obtenerCliente();

funcion(); // Gonzalo