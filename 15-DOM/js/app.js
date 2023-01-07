
/*
 ***********************************************************
 *                                                         *
 *                   ¿Qué es el DOM?                       *
 *                                                         *
 ***********************************************************
 
    - Significa 'Document Object Model', o lo que es lo mismo, la estructura del documento HTML. 
    - Una página HTML está formada por múltiples etiquetas HTML, anidadas unas dentro de otras, formando un árbol de etiquetas relacionadas entre sí (DOM).
*/

let resultado;

/*
 ***********************************************************
 *                                                         *
 *       Acceder a elementos del HTML con document         *
 *                                                         *
 ***********************************************************

    - En Javascript, la forma de acceder al DOM es a través de un objeto llamado document.
    - Representa el árbol DOM de la página o pestaña del navegador donde nos encontramos.
*/

elemento = document;
elemento = document.all; // Todos los elementos del HTML
elemento = document.head; // Elementos del head
elemento = document.body; // Elementos del body
elemento = document.domain; // 127.0.0.1
elemento = document.forms; // Ver todos los formularios del documento

elemento = document.links; // Ver todos los links 
elemento = document.links[4]; // Ver el cuarto link

elemento = document.images; // Ver todas las imagenes del documento

elemento = document.scripts; // Ver todos los scripts agregados

console.log(resultado);

/*
 ***********************************************************
 *                                                         *
 *          Métodos para seleccionar elementos             *
 *                                                         *
 ***********************************************************
*/

/*
    .getElementsByClassName()

    - Selecciona elementos por su clase.
    - Puede devolver varios elementos.
*/

// Seleccionar el header con clase header
const header = document.getElementsByClassName('header');
console.log(header);

// Seleccionar el div con clase hero
const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si las clases existen más de una vez...
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Si una clase no existe...
const noExiste = document.getElementsByClassName('no existe');
console.log(noExiste); // Devuelve un array vacío


/* 
    .getElementById()

    - Selecciona un elemento por su id.
    - Retorna un elemento como máximo.
*/

// Seleccionar el formulario con id formulario
const formulario = document.getElementById('formulario');
console.log(formulario);

// Si un id no existe...
const noExiste2 = document.getElementById('no existe');
console.log(noExiste2); // Devuelve null


/*
    .querySelector()

    - Sintaxis muy similar a hojas de estilos. 
    - Devuelve un sólo valor, siendo la primera coincidencia.
*/

// Seleccionar un div con clase card
const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores específicos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Tambíen permite seleccionar ids
const formulario2 = document.querySelector('.contenido-hero #formulario');
console.log(formulario2);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);

/*
    .querySelectorAll()

    - Selecciona varios elementos.
    - La principal diferencia con querySelector() es que devuelve todos los elementos del selector, no sólo uno.
*/

// Seleccionar todos los elementos con la clase .card
const cardTodas = document.querySelectorAll('.card');
console.log(cardTodas);

// Si un elemento no existe...
const noExiste3 = document.querySelectorAll('no-existe');
console.log(noExiste3); // Devuelve una nodeList vacío

/*
 ***********************************************************
 *                                                         *
 *              Modificar textos o imágenes                *
 *                                                         *
 ***********************************************************
*/

const encabezado = document.querySelector('.contenido-hero h1');

/*
    .innerText

    - Mostrar el texto, pero si tuviera en CSS la propiedad visibility:hidden, no se vería.
*/

console.log(encabezado.innerText);

/*
    .textContent

    - Mostrar el texto respetando los espacios en blanco. 
*/

console.log(encabezado.textContent);

/*
    .innerHTML

    - Mostrar el texto con el HTML que haya dentro. 
*/
console.log(encabezado.innerHTML);

// Cambiar el texto del h1 del encabezado
const nuevoHeading = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

// Cambiar la imagen de uno de los cards
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';

/*
 ***********************************************************
 *                                                         *
 *          Cambiar los estilos de los elementos           *
 *                                                         *
 ***********************************************************

    - En JavaScript, las palabras css compuestas con guion, se cambian a mayúscula la segunda.
    - Es recomendable agregar y quitar clases a los elementos, en vez de cambiar propiedades una por una.
*/

// Cambiar el color de fondo y la fuente del encabezado
encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'Uppercase';

/*
    .classList.add()

    - Agregar una o varias clases.
*/

card.classList.add('nueva-clase', 'segunda-clase');

/*
    .classList.remove()

    - Eliminar una o varias clases.
*/

card.classList.remove('clase1', 'clase2');

/*
 ***********************************************************
 *                                                         *
 *         Recorrer elementos: del padre al hijo           *
 *                                                         *
 ***********************************************************
*/

/* 
    .childNodes

    - Ver los elementos hijos de un elemento, en formato array.
    - Los espacios en blanco son considerados elementos (como los saltos de línea).
*/

console.log(navegacion);
console.log(navegacion.childNodes);

/*
    .children

    - Mejor alternativa a childNodes.
    - Soluciona el problema de los espacios en blanco, y sólo muestra los hijos.
*/

console.log(navegacion.children);
console.log(navegacion.children[0]); // Ver el primer elemento hijo
console.log(navegacion.children[0].nodeType); // Muestra información sobre el tipo de dato.

/*
    .firstElementChild

    - Ver el primer hijo.
*/

console.log(navegacion.firstElementChild);

/*
    .lastElementChild

    - Ver el último hijo.
*/

console.log(navegacion.lastElementChild);


/*
 ***********************************************************
 *                                                         *
 *         Recorrer elementos: del hijo al padre           *
 *                                                         *
 ***********************************************************
*/

/*
    .parentNode

    - Muestra el elemento padre que lo contiene.
*/

console.log(card.parentNode);

/* 
    .parentElement

    - Mejor alternativa a parentNode, más segura.
    - Se pueden ir encadenando varios.
*/

console.log(card.parentElement.parentElement);

/*
 ***********************************************************
 *                                                         *
 *        Recorrer elementos: de hermano a hermano         *
 *                                                         *
 ***********************************************************
*/

/* 
    .nextElementSibling

    - Mostrar el siguiente elemento hermano. 
*/

console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

/*
    .previousElementSibling

    - Mostrar el anterior elemento hermano.
*/

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);

/*
 ***********************************************************
 *                                                         *
 *                   Eliminar elementos                    *
 *                                                         *
 ***********************************************************
*/

/*
    .remove()
    
    - Eliminar un elemento.
*/

const primerEnlace = document.querySelector('a');
primerEnlace.remove();

/* 
    .removeChild()
    
    - El padre elimina al hijo.
*/

navegacion.removeChild(navegacion.children[2]); // El hijo en la posición 2 será eliminado

/*
 ***********************************************************
 *                                                         *
 *                  Generar elementos HTML                 *
 *                                                         *
 ***********************************************************
*/

/*
    .createElement() 

    - Permite crear un nuevo elemento.
*/ 

const enlace = document.createElement('a');

/*
    .createTextNode()

    - Crea un nodo de texto para el elemento.
*/

const textoEnlace = document.createTextNode('Mi nuevo enlace');

/*
    .append()

    - Agrega un nodo de texto al elemento.
*/

enlace.append(textoEnlace);

// Agregarle href y target al enlace
enlace.href = '/nuevo-enlace';
enlace.target = "_blank";

/*
    .appendChild()
    
    - Agrega un element como hijo de otro.
*/

navegacion.appendChild(enlace); // Lo coloca al final

/* 
    .insertBefore()
    
    - Coloca el elemento deseado antes del pasado por parámetro.
*/

console.log(navegacion.children); // Saber las posiciones de los elementos
navegacion.insertBefore(enlace, navegacion.children[0]); // Lo coloca el primero de todos

// Crear un card de forma dinámica

// Crear los párrafos
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Crear div con la clase informacion
const infoDiv = document.createElement('div');
infoDiv.classList.add('info');
infoDiv.appendChild(parrafo1);
infoDiv.appendChild(parrafo2);
infoDiv.appendChild(parrafo3);

// Crear la imagen
const img = document.createElement('img');
img.src = 'img/hacer2.jpg';
img.alt = 'Imagen del Concierto';

// Crear el card
const cardNueva = document.createElement('div');
cardNueva.classList.add('card');

// Asignar la imagen y la información al card 
cardNueva.appendChild(img);
cardNueva.appendChild(infoDiv);

// Insertar en el HTML, siendo la primera card de todas.
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(cardNueva, contenedor.children[0]);

/*
 ***********************************************************
 *                                                         *
 *    Ejemplo: Desplegar contenedor de idioma y moneda     *
 *                                                         *
 ***********************************************************
*/

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    // Cada vez que se haga click, quitará o agregará la clase activo, que mostrará el div.
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo'); // Se puede utilizar this, porque el botón es el que está llamando a la función.
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo'); // Cambia de color el botón
        this.textContent = 'X Cerrar'; // Cambia el texto
    }
}