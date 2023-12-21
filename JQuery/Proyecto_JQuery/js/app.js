$(document).ready(function(){
    //slider
    $(".bxslider").bxSlider({
        mode: "fade",
        captions: true,
        slideWidth:1200
    });

    //cambiar de color la pagina
    let theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });
});
    
