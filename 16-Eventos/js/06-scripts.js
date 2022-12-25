
// 14.6. EVENT BUBLING
// Los eventos que se propagan como una burbuja, dando resultados no esperados.

// Por ejemplo , si se da click en el título, va a sacar también el evento de info y card.
// Para solucionarlo, se usa el método .stopPropagation() en todos los eventos.
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
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

