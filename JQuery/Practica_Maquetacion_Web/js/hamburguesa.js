jQuery(document).ready(function ($) {
    $("body").niceScroll({cursorcolor: "#8d8c8c"});

    var overlay = $(".overlay");
    var toggleButtomMenu = $("#toggleButtomMenu");
    var menu = $(".layout__menu");

    //Hacer cambio de iconos dependiendo si el menu esta show o hide
    toggleButtomMenu.on("click", function () {
        if (toggleButtomMenu.hasClass("fa-close")) {
            layout__menu.Hide();
        } else {
            layout__menu.Show();
        }
    });

    overlay.on("click", function () {
        layout__menu.Hide();
    });

    var timeAnimation = 200;//velocidad de la animacion Show/Hide, expresado en milisegundos
    var layout__menu = {
        Hide: function () {
            menu.animate({
                left: -150
            }, timeAnimation);
            toggleButtomMenu.animate({
                left: 0
            }, timeAnimation);
            toggleButtomMenu.removeClass("fa-close");
            toggleButtomMenu.addClass("fa-reorder");
            layout__menu.PageOverlayHide();
        },
        Show: function () {
            menu.animate({
                left: 0
            }, timeAnimation);
            toggleButtomMenu.animate({
                left: 150
            }, timeAnimation);
            toggleButtomMenu.addClass("fa-close");
            toggleButtomMenu.removeClass("fa-reorder");
            layout__menu.PageOverlayShow();
        },
        PageOverlayShow: function () {
            overlay.fadeIn(timeAnimation);
        },
        PageOverlayHide: function () {
            overlay.fadeOut(timeAnimation);
        }
    };
});