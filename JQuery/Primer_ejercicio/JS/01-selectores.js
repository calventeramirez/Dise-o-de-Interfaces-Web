$(document).ready(function () {
  console.log("JQuery cargado");
  //Selector de ID
  let rojo = $("#rojo").css("background-color", "red").css("color", "white"); //Si no se cierra la linea superior puedo segur atacando a la misma variable
  let amarillo = $("#amarillo")
    .css("background-color", "yellow")
    .css("color", "black");
  let verde = $("#verde")
    .css("background-color", "green")
    .css("color", "black");
  //Selector de clase
  let mi_clase = $(".zebra");
  mi_clase.css("border", "3px dashed black");
  //Selector de etiquetas
  let parrafos = $("p").css("cursor", "pointer");
  parrafos.click(function () {
    let este = $(this);
    if (!este.hasClass("zebra")) {
        este.removeClass("zebra");
        este.addClass("zebra2");
    }else{
        este.removeClass("zebra2");
        este.addClass("zebra");
    }
    });
    //Selector de atributo
    $('[title = "Google"]').css('background-color','blue')
                            .css('color','white');

    //Otro aspecto interesenate
    $('p, a').addClass('margen-superior');
    
    let busqueda = $('#caja').find('.resaltado');
    busqueda.css("fontSize", "240px");
    console.log(busqueda);

    // let busqueda2 = $('#caja .resaltado').eq(0).parent().parent().parent().find('[title = "Google"]');
});
