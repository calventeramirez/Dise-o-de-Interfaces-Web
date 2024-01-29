$(".flechaArriba").click(function(){
    console.log("ENtre");
    $('.content__page').animate({
        scrollTop:0  // sube a lo más alto de la página.
    }, 500);  // 0,5 segs
    return false;
});