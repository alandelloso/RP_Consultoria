$(document).on('ready', noticias);

function noticias() {
	$('.nb').on('click', openSocial);
}

//Funciones Externas
function openSocial() {
	$(this).next('.ns').slideToggle('600');
}