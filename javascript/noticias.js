$(document).on('ready', noticias);

function noticias() {
	$('#nb1').on('click', socialOpen1);
	$('#nb2').on('click', socialOpen2);
}

function socialOpen1() {
	$('#ns1').slideToggle();
}

function socialOpen2() {
	$('#ns2').slideToggle();
}