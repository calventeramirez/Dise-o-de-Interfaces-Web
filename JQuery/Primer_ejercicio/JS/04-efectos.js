$(document).ready(function () {
  let caja = $("#caja");
  $("#mostrar").hide();
  $("#mostrar").click(function () {
    $(this).hide();
    $("#ocultar").show("fast");
    // caja.show('slow');
    // caja.fadeIn('low');
    // caja.slideDown('slow');
    caja.faceTo("slow", 1);
  });
  $("#ocultar").click(function () {
    $(this).hide();
    $("#mostrar").show("normal");
    // caja.hide('slow');
    // caja.fadeOut('low');
    // caja.slideUp('slow');
    caja.faceTo("slow", 0.1);
  });

  //toggle - todo en uno
  $("#todoenuno").click(function () {
    // caja.toggle('slow');
    // caja.faceTo('slow');
    caja.slideToggle("slow");
  });

  //Animaciones
  $("#animame").click(function () {
    caja
      .animate(
        {
          marginLeft: "500px",
          fontSize: "40px",
          height: "110px",
        },"slow")
      .animate(
        {
          borderRadius: "900px",
          marginTop: "100px",
        },"slow")
      .animate(
        {
          borderRadius: "0px",
          marginLeft: "0px",
        },"slow")
      .animate(
        {
          borderRadius: "100px",
          marginTop: "0px",
        },"slow");
  });
});
