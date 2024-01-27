$(document).ready(function() {
    //Compruebo si hay un tema guardado en el localStorage
    let temaGuardado = localStorage.getItem('tema');
    //Si hay un tema guardado, lo aplico
    if (temaGuardado == 'tema-Oscuro') {
        $('body').removeClass(':root').addClass('tema-Oscuro');
        $('input[type="checkbox"]').prop('checked', true);
    }

    // Escuchar el cambio en el estado del checkbox
    $('input[type="checkbox"]').change(function() {
      if ($(this).is(':checked')) {
        // Si el checkbox está marcado, agrega la clase 'tema-oscuro' y elimina la clase 'tema-claro'
        localStorage.setItem('tema', 'tema-Oscuro');
        $('body').removeClass(':root').addClass('tema-Oscuro');
      } else {
        // Si el checkbox no está marcado, agrega la clase 'tema-claro' y elimina la clase 'tema-oscuro'
        localStorage.setItem('tema', ':root');
        $('body').removeClass('tema-Oscuro').addClass(':root');
      }
    });
  });
  