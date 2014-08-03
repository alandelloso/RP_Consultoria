$(document).on('ready', app);

function app() {
	$('#menu').on('click', openMenu);
	$('#cerrar').on('click', closeMenu);
}

function openMenu() {
	$('#mnav').css('left',0);
}

function closeMenu() {
	$('#mnav').css('left','-15em');
}
