$(document).ready(function() {
    // Escuchar el evento scroll de la ventana
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        // Si el desplazamiento es mayor a 100px, mostrar el botón
        $('.flechaArriba').fadeIn();
      } else {
        // Si no, ocultar el botón
        $('.flechaArriba').fadeOut();
      }
    });
  
    // Escuchar el clic en el botón para ir hacia arriba
    $('.flechaArriba').click(function() {
      // Animación para desplazarse hacia arriba de la página
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
  });