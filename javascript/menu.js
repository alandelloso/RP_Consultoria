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
         $('nav').css({'position': 'fixed', 'top': '0', 'width': '100%', 'box-shadow': 'rgba(0,0,0,0.5) 0 4px 15px'})
         $('#tsocial').fadeIn();
    } else if (width > 1165 && height  < 100) {
        $('nav').css({'position': 'relative', 'box-shadow': 'none'})
        $('#tsocial').fadeOut();
    } else if (width < 1165 && height  > 50) {
        $('nav').css({'position': 'fixed', 'top': '0', 'width': '100%', 'box-shadow': 'rgba(0,0,0,0.5) 0 4px 15px'})
        $('#tsocial').fadeIn();
    } else if (width < 1165 && height  < 50) {
       $('nav').css({'position': 'relative', 'box-shadow': 'none'})
       $('#tsocial').fadeOut();
    }
});

}

function openMenu() {
    var dheight = $(document).height();
    $('#mnav').css({'left': '0', 'height': dheight});
}

function closeMenu() {
    $('#mnav').css('left','-15em');
}

