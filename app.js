// Seleccionamos todos los botones dentro del nav
const botones = document.querySelectorAll('nav button');
const hamburger = document.querySelector('header .hamburger');
const nav = document.querySelector('header nav');



botones.forEach(boton => { // forEach loop
  // Agregamos transición suave
  boton.style.transition = 'transform 0.2s ease'; // ease --> suave

  // Funciones
  function agrandar() {
    boton.style.transform = 'scale(1.1)';
  }

  function restaurar() {
    boton.style.transform = 'scale(1)';
  }

  // Eventos para clic y touch
  boton.addEventListener('mousedown', agrandar);
  boton.addEventListener('mouseup', restaurar);
  boton.addEventListener('mouseleave', restaurar);
  boton.addEventListener('touchstart', agrandar);
  boton.addEventListener('touchend', restaurar);

  // Evento hover (cuando se pasa el mouse por arriba)
  boton.addEventListener('mouseover', agrandar);
  boton.addEventListener('mouseout', restaurar);
});


// scroll con botones
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const targetID = boton.getAttribute('data-target');
    const targetSection = document.getElementById(targetID);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// menu tipo hamburguesa para moviles 
hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// efecto de la imagen con avatar en telefonos y pc
document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card');

  const esTactil = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (esTactil) {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  }
});

