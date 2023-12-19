$(document).ready(function(){
    // alert("JQuery cargado");
    $(".elemento").draggable(); //asi todos los elementos son dragables
    $(".elemento").resizable(); //asi tambien se hacen que podamos cambiar de tamaño
   $(".lista-seleccionable").selectable(); //Nos permite hacer multiseleccion
    $(".lista-seleccionable").sortable(); //Nos ordena los elementos arrastrando. No es permitido a la vez el sortable y el selectable.
    /* Nos permite tambien añadir una función
    //$(".lista-seleccionable").sortable({
    //     update: function(event){
    //         console.log("He cambiado la lista");
    //     }
     });*/
     $("#elemento-movido").draggable();
     $("#area").droppable({
        drop:function(evento){
            console.log("Has soltado un elemento");
        }
     });

     $("#mostrar").click(function(){
        //$(".caja-efectos").toggle("fade");
        //$(".caja-efectos").fadeToggle(); // opción 2

        //$(".caja-efectos").effect("explode"); // explode es un método no nativo y se lo tengo que pasar como param.
        //$(".caja-efectos").toggle("explode");

        //$(".caja-efectos").toggle("slide"); // lo mueve de un lado a otro.
        //$(".caja-efectos").toggle("drop");
        //$(".caja-efectos").toggle("fold");
        //$(".caja-efectos").toggle("puff");
        //$(".caja-efectos").toggle("scale"); // muy chulo
        //$(".caja-efectos").toggle("shake");

        // puedo pasarle opciones, tamaños, velocidades,...
        //$(".caja-efectos").toggle("shake", "slow");
        //$(".caja-efectos").toggle("shake", 4000); // 4 segs
        $(".caja-efectos").toggle("shake", {}, 4000); // un json con varios datos y tiempo de 4 segs.
     });

     $(document).tooltip(); //Para que salte un mensaje de texto con informacion del title

     $("#popup").dialog();
     $("#lanzar-popup").click(function(){
        $("#popup2").dialog();
     });

     $("#calendario").datepicker(); //Hacer un text box en un "date"
     $("#pestanas").tabs();
});

