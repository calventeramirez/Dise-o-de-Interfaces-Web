$(".flechaArriba").click(function(e){
    e.preventDefault();  // le paso como parámetro el evento y le indico con preventDefault que no realice su función estándar.
    $('html, body').animate({
        scrollTop:0  // sube a lo más alto de la página.
    }, 500);  // 0,5 segs
    return false;
});