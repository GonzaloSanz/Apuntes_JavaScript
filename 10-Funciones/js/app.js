'use strict'

/*
 ***********************************************************
 *                                                         *
 *                  ¿Qué es una función?                   *
 *                                                         *
 ***********************************************************

    - Es una agrupación de código reutilizable y más fácil de mantener.
    - JavaScript se ejecuta con dos pasadas al código (hosting), de forma que una función puede llamarse antes de ser declarada.
*/

// Declaración de función
function sumar() {
    console.log(2 + 2);
}

// Expresión de función
const sumar2 = function () {
    console.log(2 + 2);
}

// Llamar a la función
sumar();
sumar2();

/*
 ***********************************************************
 *                                                         *
 *                  Funciones de ventana                   *
 *                                                         *
 ***********************************************************

    - Propias de JavaScript.
*/

/*
    alert();

    - Pop up de alerta.
*/

alert("Esto es un mensaje");

/*
    comfirm();

    - Ventana de confirmación.
    - Devuelve un booleano.
*/

confirm("¿Deseas continuar?");

/*
    prompt();

    - Ventana para introducir datos.
    - Tiene un segundo parámetro opcional, que sería el valor por defecto en caso de no introducir nada. 
*/

prompt("Introduce tu edad", 18);

/*
 ***********************************************************
 *                                                         *
 *                 Parámetros y argumentos                 *
 *                                                         *
 ***********************************************************
*/

function sumarNumeros(a, b) { // a y b son parámetros
    console.log(a + b);
}

sumarNumeros(12, 56); // 12 y 56 son argumentos

/*
 ***********************************************************
 *                                                         *
 *                  Parámetros por defecto                 *
 *                                                         *
 ***********************************************************
*/

function saludar(nombre, apellido = '') { // apellido por defecto saldrá vacío, a menos que se pase como parámetro.
    console.log(`Hola, ${nombre} ${apellido}`);
}

saludar('Gonzalo', 'Sanz');
saludar('Gonzalo');

/*
 ***********************************************************
 *                                                         *
 *              Comunicación entre funciones               *
 *                                                         *
 ***********************************************************
*/

iniciarApp();

function iniciarApp() {
    console.log('Iniciando App...');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda función.');
    usuarioAutenticado('Gonzalo');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...espere...');
    console.log(`Usuario ${usuario} autenticado correctamente.`);
}

/*
 ***********************************************************
 *                                                         *
 *                   Devolver variables                    *
 *                                                         *
 ***********************************************************

    - Con la palabra reservada return, se puede devolver algo en una función.
*/

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(670);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de: ${totalPagar}`);

/*
 ***********************************************************
 *                                                         *
 *           Detener la ejecución de la función            *
 *                                                         *
 ***********************************************************

    - Con return se puede interrumpir la función, y las siguientes líneas de código no se ejecutarán.
*/

const puntuacion = 450;

function revisarPuntuacion() {

    if (puntuacion > 400) {
        console.log('Genial!');
        return;
    }

    if (puntuacion > 300) {
        console.log('No está mal...');
    }
}

revisarPuntuacion();

/*
 ***********************************************************
 *                                                         *
 *       Funciones en objetos (Métodos de propiedad)       *
 *                                                         *
 ***********************************************************
*/

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function () {
        console.log('Pausando...');
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la Playlist de ${nombre}`)
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`);
    }
}

// Método de propiedad
reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar;

// Añadir función como propiedad
reproductor.borrar = function (id) {
    console.log(`Borrando la canción... ${id}`);
}

reproductor.borrar(30);
reproductor.crearPlaylist('Los 40 Principales');
reproductor.reproducirPlaylist('Heavy Metal');

/*
 ***********************************************************
 *                                                         *
 *               Funciones flecha (anónimas)               *
 *                                                         *
 ***********************************************************

    - Es una alternativa compacta a la expresión tradicional.
    - No dispone de sus propios enlaces a this o super, por que no debe utilizarse para métodos.
    - No se puede utilizar como constructor.
*/

// Función Tradicional
const aprendiendo = function () {
    return 'Aprendiendo JavaScript';
}

// Función flecha de una sóla línea
// No hacen falta poner el return, la propia función ya lo asume
const aprendiendo2 = () => 'Aprendiendo JavaScript';

// Con un sólo parámetro no hace falta paréntesis
const aprendiendo2Param = tecnologia => `Aprendiendo ${tecnologia}`;
console.log(aprendiendo2Param('JavaScript'));

// Función flecha de varias líneas
const aprendiendo3 = () => {
    console.log('Hola');
    return 'Sigo aprendiendo';
};

// Varios parámetros
const aprendiendo3Param = (tecnologia1, tecnologia2) => `Aprendiendo ${tecnologia1} y ${tecnologia2}`;
console.log(aprendiendo3Param('JavaScript', 'PHP'));

/*
 ***********************************************************
 *                                                         *
 *         Funciones flecha con map() y foreach()          *
 *                                                         *
 ***********************************************************
*/

const carrito = [
    { nombre: 'Monitor Aorus 27 pulgadas', precio: 500 },
    { nombre: 'Televisión LG 4K', precio: 100 },
    { nombre: 'Tablet Samsung', precio: 200 },
    { nombre: 'Auriculares Sony', precio: 300 },
    { nombre: 'Teclado Razer', precio: 400 },
    { nombre: 'Alcatel', precio: 700 }
]

// map()
const nuevoArray = carrito.map(producto => `${producto.nombre} - Precio: ${producto.precio}`);
console.log(nuevoArray);

// forEach()
carrito.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

/*
 ***********************************************************
 *                                                         *
 *                  Reproductor de música                  *
 *                                                         *
 ***********************************************************
*/

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('Pausando...'),
    crearPlaylist: nombre => console.log(`Creando la Playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la Playlist ${nombre}`),

    // Con set y get se pueden establecer métodos interesantes
    set nuevaCancion(cancion) {
        this.cancion = cancion; // La canción vacía del objeto ahora tendrá ese valor
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`); // Muestra la canción que tiene el objeto
    }
}

reproductor.cancion = 'Enter Sandman'; // Set
reproductor.obtenerCancion; // Get

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar;
reproductor.borrar = id => console.log(`Borrando la canción... ${id}`);
reproductor.borrar(30);
reproductor.crearPlaylist('Los 40 Principales');
reproductor.reproducirPlaylist('Heavy Metal');

/*
 ***********************************************************
 *                                                         *
 *                 Funciones de intervalos                 *
 *                                                         *
 ***********************************************************
*/

/* 
    setTimeout()

    - Sólo se ejecuta una vez, en un tiempo especificado-
*/

setTimeout(() => {
    console.log('Esta función se ejecuta después de 3 segundos');
}, 3000); // Pasados los 3 segundos.

/* 
    setInterval()
    - Establece un intervalo que se ejecuta cada x tiempo.
*/

setInterval(() => {
    console.log('Intervalo ejecutado');
}, 2000); // Cada 2 segundos