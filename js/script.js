import "nes.css/css/nes.min.css";

document.querySelector('.nes-btn.is-primary').addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    const infoSection = document.querySelector('#información');
    const navHeight = document.querySelector('nav').offsetHeight; // Obtiene la altura de la barra de navegación
    const videoHeight = document.querySelector('.video-presentacion').offsetHeight; // Obtiene la altura del video
    
    window.scrollTo({
        top: infoSection.offsetTop - (navHeight + videoHeight) + 50, // Ajusta para que no lo tape
        behavior: 'smooth'
    });
});