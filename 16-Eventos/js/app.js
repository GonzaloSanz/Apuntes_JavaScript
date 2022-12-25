
/*
 ***********************************************************
 *                                                         *
 *                    DomContentLoaded                     *
 *                                                         *
 ***********************************************************
 
    - Evento que se ejecuta cuando el HTML ya está completamente cargado.
*/

console.log(1);

/*
    .addEventListener()

    - Agregar evento a un elemento.
*/

document.addEventListener('DOMContentLoaded', () =>{
    console.log(2);
    console.log('Documento listo');
});

console.log(3); // Saldrá 1, 3, 2 en la consola


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
    Dbllick
    
    - Hacer doble clic con el ratón.
*/

nav.addEventListener('dblclick', () =>{
    console.log('Has hecho doble click!');
});

// Mouseenter -> Entrar con el ratón a un elemento
nav.addEventListener('mouseenter', () =>{
    console.log('Entrando en la navegación');
    nav.style.backgroundColor = 'transparent';
});

// Mouseout -> Salir con el ratón de un elemento
nav.addEventListener('mouseover', () =>{
    console.log('Saliendo de la navegación');
    nav.style.backgroundColor = 'white';
});

// Mousedown -> Haces click con el ratón (igual a evento click)
nav.addEventListener('mousedown', () =>{
    console.log('Ratón presionado');
});

// Mouseup -> Cuando sueltas el click
nav.addEventListener('mouseup', () =>{
    console.log('Dejando de presionar...');
});

