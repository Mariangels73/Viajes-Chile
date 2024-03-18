$(document).ready(function () {
    // Agrega clase "transparent" a la barra de navegación al inicio
    $('.navbar').addClass('transparent');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').removeClass('transparent').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled').addClass('transparent');
        }
    });
});

//accion al hacer click en la nav redirija al sitio en la pag

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll al hacer clic en enlaces de la barra de navegación
    const links = document.querySelectorAll('.navbar-nav a.nav-link');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });

//desaparecer tarjetas de informacion

$(document).ready(function () {
    // Manejar el evento click en cualquier título de receta
    $('.toggle-titulo').click(function () {
        // Utilizar toggle en el contenido de la tarjeta correspondiente
        $(this).closest('.destacado-card').find('.toggle-contenido').toggle();
    });
});


//tarjetas

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      card.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  });
