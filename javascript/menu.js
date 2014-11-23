$(document).on('ready', app);

function app() {
//Eventos
    $('#menu').on('click', openMenu);
    $('#cerrar').on('click', closeMenu);

//Funciones Anónimas
    $(window).scroll(function() {

    var height = $(window).scrollTop();
    var width = $(window).width();

    if(width > 1165 && height  > 100) {
         $('nav').css({'position': 'fixed', 'top': '0', 'width': '100%'})
         $('#tsocial').fadeIn();
    } else if (width > 1165 && height  < 100) {
        $('nav').css({'position': 'relative',})
        $('#tsocial').fadeOut();
    } else if (width < 1165 && height  > 50) {
        $('nav').css({'position': 'fixed', 'top': '0', 'width': '100%'})
        $('#tsocial').fadeIn();
    } else if (width < 1165 && height  < 50) {
       $('nav').css({'position': 'relative',})
       $('#tsocial').fadeOut();
    }
});

}

function openMenu() {
    $('#mnav').css('left',0);
}

function closeMenu() {
    $('#mnav').css('left','-15em');
}

