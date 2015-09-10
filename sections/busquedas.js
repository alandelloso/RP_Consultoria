$(document).on('ready', app);

function app() {
	$('#post-volunt').on('click', openVol);
}

function openVol() {
	$('#postulacion-voluntaria').slideToggle();
}

