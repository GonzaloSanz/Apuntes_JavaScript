
// 14.5. EVENTOS DE SCROLL CON EL RATÓN

// scroll -> cada vez que se hace scroll con el ratón
window.addEventListener('scroll', () => {
    console.log('Haciendo Scroll...');

    // Saber la cantidad de píxeles hechos scroll y mostrarlos por consola
    const scrollPX = window.scrollY;
    console.log(scrollPX);
})