'use strict'

/*
	1. REST

	- Nos permite representar un numero indefinido de argumentos como un array.
	- El ultimo parametro se puede prefijar con ... lo que hará que todos los argumentos restantes se coloquen dentro de un array. 
	- Sólo el ultimo parametro puede ser un parametro rest.
*/

function nombres(nombreProfe, nombreDelegado, ...restoDeNombres) {
	document.write("El nombre del profesor es " + nombreProfe + "</br>");
	document.write("El nombre del delegado es " + nombreDelegado + "</br>");
	for (let index = 0; index < restoDeNombres.length; index++) {
		console.log("Mi nombre es " + restoDeNombres[index]);
	}
}

nombres("Pedro", "Juan", "Manolo", " Sergio", " Javi", " Saul", " Alejandro", " Javier");

/*
	2. SPREAD
	
	- Cuando una funcion espera varios parámetros, si le pasamos un array prefijado con ... intrepreta lo que contiene como los parámetros esperados.
*/

var nombres = ["Sergio", "Manolo", "Pepe"];

function nombres2(nombre1, nombre2, nombre3) {
	console.log("Nombre 1: " + nombre1);
	console.log("Nombre 2: " + nombre2);
	console.log("Nombre 3: " + nombre3);
}

nombres2(...nombres);