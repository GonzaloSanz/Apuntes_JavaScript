'use strict'

/*
 ***********************************************************
 *                                                         *
 *                    DomContentLoaded                     *
 *                                                         *
 ***********************************************************
 
    - Evento que se ejecuta cuando el HTML ya está completamente cargado.
*/

/*
    .addEventListener()

    - Escucha los eventos del elemento.
*/

document.addEventListener('DOMContentLoaded', () =>{
    console.log('Documento listo');
});

/*
 ***********************************************************
 *                                                         *
 *                Eventos con el ratón                     *
 *                                                         *
 ***********************************************************
*/

const nav = document.querySelector('.navegacion');

/* 
    click 
    
    - Hacer clic con el ratón. 
*/

nav.addEventListener('click', () =>{
    console.log('Click en nav');
});

/* 
    dblclick
    
    - Hacer doble clic con el ratón.
*/

nav.addEventListener('dblclick', () =>{
    console.log('Has hecho doble click!');
});

/*
    mouseenter
    
    - Entrar con el puntero del ratón a un elemento.
*/

nav.addEventListener('mouseenter', () =>{
    console.log('Entrando en la navegación');
    nav.style.backgroundColor = 'transparent';
});

/*
    mouseover
    
    - El puntero del ratón se mueve por el elemento.
*/

nav.addEventListener('mouseover', () =>{
    console.log('Moviéndose por la navegación');
    nav.style.backgroundColor = 'transparent';
});

/* 
    mouseout
    
    - El puntero del ratón sale fuera del elemento. 
*/

nav.addEventListener('mouseout', () =>{
    console.log('Saliendo de la navegación');
    nav.style.backgroundColor = 'white';
});

/*
    mousedown
    
    - Haces clic con el ratón (igual a evento click)
*/

nav.addEventListener('mousedown', () =>{
    console.log('Ratón presionado');
});

/*
    mouseup

    - Sueltas el clic del ratón. 
*/

nav.addEventListener('mouseup', () =>{
    console.log('Dejando de presionar...');
});

/*
 ***********************************************************
 *                                                         *
 *                Eventos sobre los inputs                 *
 *                                                         *
 ***********************************************************
*/

const busqueda = document.querySelector('.busqueda');

/*
    keydown
    
    - Presionas una tecla.
*/

busqueda.addEventListener('keydown', () => {
    console.log('Escribiendo...');
});

/*
    keyup
    
    - Dejas de presionar una tecla.
*/

busqueda.addEventListener('keyup', () => {
    console.log('Dejando de escribir...');
});

/* 
    blur

    -Se dispara cuando se peirde el foco del campo, es decir, entrar y salir. 
*/
busqueda.addEventListener('blur', () => {
    console.log('Has salido del campo');
});

/*
    copy 

    - Copiar el texto del campo con CTRL + C / click derecho y copiar.
*/

busqueda.addEventListener('copy', () => {
    console.log('Texto copiado');
});

/*
    paste 

    - Pegar texto.
*/

busqueda.addEventListener('paste', () => {
    console.log('Texto pegado');
});

/*
    cut 

    - Cortar el texto (no eliminarlo).
*/

busqueda.addEventListener('cut', () => {
    console.log('Texto cortado');
});

/*
    input

    - Cuando se realiza cualquier acción anterior, salvo el blur.
*/

busqueda.addEventListener('input', e => { // e es opcional, y te da información del campo
    console.log(e);
    console.log(e.target.value); // Muestra lo que el usuario ha introducido
});


/*
 ***********************************************************
 *                                                         *
 *                 Evento de formulario                    *
 *                                                         *
 ***********************************************************
*/

const formulario = document.querySelector('#formulario');

/*
    submit
    
    - Cuando se envía el formulario.
*/

formulario.addEventListener('submit', e => {
    e.preventDefault(); // Previene la acción del envío.

    console.log(e.target.method); // Ver que método de envío se usa (POST)
    console.log(e.target.action); // Ver el enlace al que lleva

    formulario.reset(); // Reiniciar el formulario
});

/*
 ***********************************************************
 *                                                         *
 *                   Evento de scroll                      *
 *                                                         *
 ***********************************************************
*/

/*
    scroll
    
    - Cada vez que se hace scroll con el ratón.
*/

window.addEventListener('scroll', () => {
    console.log('Haciendo Scroll...');

    // Saber la cantidad de píxeles hechos al hacer scroll, para mostrarlos por consola
    const scrollPX = window.scrollY;
    console.log(scrollPX);
})


/*
 ***********************************************************
 *                                                         *
 *                      Event Bubling                      *
 *                                                         *
 ***********************************************************
 
    - Los eventos que se propagan como una burbuja, dando resultados no esperados.
    - Verifica si los elementos padre de dicho elemento tienen eventos registrados en sus listeners,
    y si es así, ejecuta dichos eventos de manera automática.
*/

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation(); // Para solucionarlo, se usa el método .stopPropagation(); en todos los eventos.
    console.log('Click en card');
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en info');
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en titulo');
});

/*
 ***********************************************************
 *                                                         *
 *         Alternativa para prevenir Event Bubling         *
 *                                                         *
 ***********************************************************
*/

const cardDiv2 = document.querySelector('.card');

cardDiv2.addEventListener('click', e => {

    // Hacer una estructura condicional según la clase del elemento clicado
    if (e.target.classList.contains('titulo')) {
        console.log('Diste click en título');

    } else if (e.target.classList.contains('precio')) {
        console.log('Diste click en el precio');

    } else if (e.target.classList.contains('card')) {
        console.log('Diste click en card');
    }
});

