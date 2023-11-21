$(document).ready(function () {
  $("a").each(function () {
    let este = $(this);
    let enlace = este.attr("href");

    este.attr("target", "_blank");
    este.text(enlace);
  });

  $("#add_button")
    .removeAttr("disabled")
    .click(function () {
      // $('#menu').html('<li><a href="'+$("#add_link").val()+'"></a></li>');  // machaca lo que hay
      $("#menu").append('<li><a href="' + $("#add_link").val() + '"></a></li>'); // añade al final
      // $('#menu').preppend('<li><a href="'+$("#add_link").val()+'"></a></li>'); // añade al inicio
      // $('#menu').before('<li><a href="'+$("#add_link").val()+'"></a></li>'); // añade al inicio fuera de la lista
      // $('#menu').after('<li><a href="'+$("#add_link").val()+'"></a></li>'); // añade al final fuera de la lista
      recargarLink();
      $("#add_link").val("");
    });
});

function recargarLink() {
  $("a").each(function () {
    let este = $(this);
    let enlace = este.attr("href");

    este.attr("target", "_blank");
    este.text(enlace);
  });
}
