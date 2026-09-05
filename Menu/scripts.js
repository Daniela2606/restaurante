// Menú de navegación en móvil
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Cierra el menú móvil al elegir una sección
siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Filtro de categorías del menú
const tabs = document.querySelectorAll('.tab');
const groups = document.querySelectorAll('.menu-group');
const emptyState = document.getElementById('emptyState');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    const category = tab.dataset.category;
    let visibleCount = 0;

    groups.forEach((group) => {
      const matches = category === 'todos' || group.dataset.category === category;
      group.hidden = !matches;
      if (matches) visibleCount++;
    });

    emptyState.hidden = visibleCount !== 0;
  });
});