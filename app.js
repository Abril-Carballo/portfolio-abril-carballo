// Seleccionamos todos los botones dentro del nav
const botones = document.querySelectorAll('nav button');


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



botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const targetID = boton.getAttribute('data-target');
    const targetSection = document.getElementById(targetID);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
