
// 14.3. EVENTOS SOBRE LOS INPUTS

const busqueda = document.querySelector('.busqueda');

// keydown -> Presionas una tecla
busqueda.addEventListener('keydown', () => {
    console.log('Escribiendo...');
});

// keyup -> Dejar de presionar una tecla
busqueda.addEventListener('keyup', () => {
    console.log('Dejando de escribir...');
});

// blur -> Se dispara cuando se peirde el foco del campo, es decir, entrar y salir.
busqueda.addEventListener('blur', () => {
    console.log('Has salido del cmapo');
});

// copy -> Copiar el texto del campo con ctrl + c o click derecho y copiar
busqueda.addEventListener('copy', () => {
    console.log('Texto copiado');
});

// paste -> Pegar texto
busqueda.addEventListener('paste', () => {
    console.log('Texto pegado');
});

// cut -> Cortar el texto (no eliminarlo)
busqueda.addEventListener('cut', () => {
    console.log('Texto cortado');
});

// input -> Cuando se realiza cualquier acción anterior SALVO EL BLUR
busqueda.addEventListener('input', (evt) => { // evt es opcional, y te da información del campo
    console.log(evt);
    console.log(evt.target.value); // lo que el usuario está escribiendo
});
