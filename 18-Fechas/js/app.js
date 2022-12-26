'use strict'

/*
 ***********************************************************
 *                                                         *
 *                      ¿Qué es Date?                      *
 *                                                         *
 ***********************************************************

    - Los objetos Date representan en JavaScript un momento fijo en el tiempo en un formato independiente.
    - El objeto Date contiene un número que representa los milisegundos transcurridos desde el 1 de Enero de 1970 UTC.
*/


/*
 ***********************************************************
 *                                                         *
 *                      Obtener fecha                      *
 *                                                         *
 ***********************************************************
*/

// Fecha actual
var diaHoy = new Date();
console.log(diaHoy);

// Las fechas son de tipo 'object'
console.log(typeof diaHoy);

/*
    .getFullYear()

    - Obtener el año actual.
*/

console.log(diaHoy.getFullYear());

/*
    .getMonth()

    - Obtener el mes actual.
    - Los meses van del 0 (Enero) al 11 (Diciembre).
*/

console.log(diaHoy.getMonth());

/*
    .getHours()

    - Obtener la hora actual.
*/

console.log(diaHoy.getHours());

/*
    .getMinutes()

    - Obtener el minuto actual.
*/

console.log(diaHoy.getMinutes());

/*
    .getSeconds()

    - Obtener el segundo actual.
*/

console.log(diaHoy.getSeconds());

/*
    .getTime()

    - Obtener los milisegundos transcurridos desde el 1 de Enero de 1970.
*/

console.log(diaHoy.getTime());

/*
    Date.now()

    - Otra forma de obtener los milisegundos transcurridos.
    - No es necesario instanciar un objeto fecha.
*/

console.log(Date.now());

/*
 ***********************************************************
 *                                                         *
 *                    Modificar fecha                      *
 *                                                         *
 ***********************************************************
*/

// Modificar la fecha a 15 de Julio del 2000 18:55:38
diaHoy.setFullYear(2000);
diaHoy.setMonth(6);
diaHoy.setDate(15);
diaHoy.setHours(18);
diaHoy.setMinutes(55);
diaHoy.setSeconds(38);

console.log(diaHoy);

// Fecha personalizada en formato mes - dia - año
diaHoy = new Date('7-15-2000'); 
console.log(diaHoy);

diaHoy = new Date('July 15 2000');
console.log(diaHoy);

/*
 ***********************************************************
 *                                                         *
 *                        MomentJS                         *
 *                                                         *
 ***********************************************************

    - Se trata de una librería que permite manipular, validar o mostrar una fecha en JavaScript.
*/

moment.locale('es');
console.log(moment().format('D MMMM YYYY h:mm:ss a')); // 19 junio 2022 12:57:48 pm

console.log(moment().format('LLLL', diaHoy)); // domingo, 19 de junio de 2022 13:00

// Añadir tres días más a la fecha actual
console.log(moment().add(3, 'days').calendar()); // miércoles a las 13:01

