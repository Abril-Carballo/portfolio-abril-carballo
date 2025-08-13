// Seleccionamos todos los botones dentro del nav
const botones = document.querySelectorAll('nav button');

// Constantes para el menu tipo hamburguesa 
const hamburger = document.querySelector('header .hamburger');
const nav = document.querySelector('header nav');

// Constantes para actualizar anio en footer
const anioSpan = document.getElementById('anio');
const anioActual = new Date().getFullYear();


botones.forEach(boton => { // forEach loop
  //  transición suave
  boton.style.transition = 'transform 0.2s ease'; // ease --> suave

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

// hover imagenes proyecto 3 para dispositivos tactiles
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active'); // activa/desactiva el efecto
  });
});

// efecto de la imagen con avatar en dispositivos tactiles
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  const esTactil = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (esTactil) {
    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  }
});

// Obtener el anio
anioSpan.textContent = anioActual;
