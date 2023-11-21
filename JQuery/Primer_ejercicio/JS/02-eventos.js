$(document).ready(function () {
  console.log("jQuery esta funcionando");

  // MouseOver y MouseOut
  let caja = $("#caja");
  // caja.mouseover(function(){
  //     $(this).css("background","red")
  //             .css("color","white");
  // });
  // caja.mouseout(function(){
  //     $(this).css("background","yellow")
  //             .css("color","black");
  // });
  //hover --> admite 2 llamadas a funciones callback
  function cambiaRojo() {
    $(this).css("background", "red").css("color", "white");
  }
  function cambiaVerde() {
    $(this).css("background", "green").css("color", "white");
  }
  caja.hover(cambiaRojo, cambiaVerde);

  // Click y Doble Click.
  caja.click(function () {
    $(this).css("background", "blue").css("color", "white");
  });
  caja.dblclick(function () {
    $(this).css("background", "pink").css("color", "black");
  });

  // Focus y Blur
  let txt = $("#text");
  txt.focus(function () {
    $(this).css("border", "4px dashed yellow");
  });
  txt.blur(function () {
    $(this).css("border", "2px solid blue");
    $("#datos").text($(this).val()).show();
  });

  // Mousedown y Mouseup (clickar y soltar)
  var datos = $("#caja2");
  datos.mousedown(function () {
    $(this).css("border", "2px solid gray");
  });
  datos.mouseup(function () {
    $(this).css("border", "2px solid blue");
  });

  // Mousemove
    $(document).mousemove(function (event) {
        $("body").css("cursor", "none");
        $("#sigueme").css("left", event.clientX)
                        .css("top", event.clientY);
    });
});
