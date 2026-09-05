
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Envío del formulario de contacto
const formContacto = document.getElementById('formContacto');
const formFeedback = document.getElementById('formFeedback');

formContacto.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('name').value.trim();

  // Aquí se conectaría con el backend cuando exista
  formFeedback.textContent = `Gracias, ${nombre}. Recibimos tu solicitud y te contactaremos pronto.`;
  formFeedback.hidden = false;

  formContacto.reset();
});