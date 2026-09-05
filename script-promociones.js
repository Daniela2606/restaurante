// ---------- Menú de navegación en móvil ----------

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {

  navToggle.addEventListener("click", () => {

    const isOpen = siteNav.classList.toggle("open");

    navToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  // Cierra el menú móvil al seleccionar una sección

  siteNav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      siteNav.classList.remove("open");

      navToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


// ---------- Filtro de promociones ----------

const promoTabs = document.querySelectorAll(".promo-tab");
const promotionCards = document.querySelectorAll(".promotion-card");
const emptyState = document.getElementById("emptyState");


promoTabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    // Cambiar pestaña activa

    promoTabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");


    // Obtener categoría seleccionada

    const category = tab.dataset.category;

    let visibleCount = 0;


    // Mostrar u ocultar promociones

    promotionCards.forEach((card) => {

      const matches =
        category === "todas" ||
        card.dataset.category === category;

      card.hidden = !matches;

      if (matches) {
        visibleCount++;
      }

    });


    // Mostrar mensaje si no existen promociones

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }

  });

});


// ---------- Botones de promociones ----------

const promoButtons = document.querySelectorAll(".promo-button");


promoButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const promoName = button.dataset.promo;

    alert(
      "Has seleccionado la promoción: " +
      promoName +
      ". Para disfrutarla, realiza tu reserva."
    );

  });

});
