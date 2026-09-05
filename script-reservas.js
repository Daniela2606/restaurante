// Menú de navegación en móvil
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Cierra el menú móvil al hacer clic en un enlace
siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Manejo del envío del formulario de reservas
const formReserva = document.getElementById('formReserva');

formReserva.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  alert(`¡Gracias, ${nombre}! Tu solicitud de reserva ha sido enviada con éxito.`);
  formReserva.reset();
});
