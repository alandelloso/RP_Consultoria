$(document).on('ready', app);

function app() {
	$('#sb1').on('click', openB1);
	$('#pb1').on('click', openP1);
	$('#sb2').on('click', openB2);
	$('#pb2').on('click', openP2);
	$('#sb3').on('click', openB3);
	$('#pb3').on('click', openP3);
	$('#sb4').on('click', openB4);
	$('#pb4').on('click', openP4);
	$('#post-volunt').on('click', openPost);
}

//Busqueda 1
function openB1() {
	if ($('.bp1').hasClass('hide') && $('.bs1').hasClass('hide')) {
		$('.bs1').slideDown().removeClass('hide').addClass('show');
	} else if ($('.bp1').hasClass('hide') && $('.bs1').hasClass('show')) {
		$('.bs1').slideUp().removeClass('show').addClass('hide');
	} else if ($('.bp1').hasClass('show') && $('.bs1').hasClass('hide')) {
		$('.bp1').slideUp().removeClass('show').addClass('hide');
		$('.bs1').delay(500).slideDown().removeClass('hide').addClass('show');
	}
}

function openP1() {
	if ($('.bs1').hasClass('hide') && $('.bp1').hasClass('hide')) {
		$('.bp1').slideDown().removeClass('hide').addClass('show');
	} else if ($('.bs1').hasClass('hide') && $('.bp1').hasClass('show')) {
		$('.bp1').slideUp().removeClass('show').addClass('hide');
	} else if ($('.bs1').hasClass('show') && $('.bp1').hasClass('hide')) {
		$('.bs1').slideUp().removeClass('show').addClass('hide');
		$('.bp1').delay(500).slideDown().removeClass('hide').addClass('show');
	}
}

//Busqueda 2
function openB2() {
	if ($('.bp2').hasClass('hide') && $('.bs2').hasClass('hide')) {
		$('.bs2').slideDown().removeClass('hide').addClass('show');
	} else if ($('.bp2').hasClass('hide') && $('.bs2').hasClass('show')) {
		$('.bs2').slideUp().removeClass('show').addClass('hide');
	} else if ($('.bp2').hasClass('show') && $('.bs2').hasClass('hide')) {
		$('.bp2').slideUp().removeClass('show').addClass('hide');
		$('.bs2').delay(500).slideDown().removeClass('hide').addClass('show');
	}
}

function openP2() {
	if ($('.bs2').hasClass('hide') && $('.bp2').hasClass('hide')) {
		$('.bp2').slideDown().removeClass('hide').addClass('show');
	} else if ($('.bs2').hasClass('hide') && $('.bp2').hasClass('show')) {
		$('.bp2').slideUp().removeClass('show').addClass('hide');
	} else if ($('.bs2').hasClass('show') && $('.bp2').hasClass('hide')) {
		$('.bs2').slideUp().removeClass('show').addClass('hide');
		$('.bp2').delay(500).slideDown().removeClass('hide').addClass('show');
	}
}

//Busqueda 3
function openB3() {
	if ($('.bp3').hasClass('hide') && $('.bs3').hasClass('hide')) {
		$('.bs3').slideDown().removeClass('hide').addClass('show');
	} else if ($('.bp3').hasClass('hide') && $('.bs3').hasClass('show')) {
		$('.bs3').slideUp().removeClass('show').addClass('hide');
	} else if ($('.bp3').hasClass('show') && $('.bs3').hasClass('hide')) {
		$('.bp3').slideUp().removeClass('show').addClass('hide');
		$('.bs3').delay(500).slideDown().removeClass('hide').addClass('show');
	}
}

function openP3() {
	if ($('.bs3').hasClass('hide') && $('.bp3').hasClass('hide')) {
		$('.bp3').slideDown().removeClass('hide').addClass('show');
	} else if ($('.bs3').hasClass('hide') && $('.bp3').hasClass('show')) {
		$('.bp3').slideUp().removeClass('show').addClass('hide');
	} else if ($('.bs3').hasClass('show') && $('.bp3').hasClass('hide')) {
		$('.bs3').slideUp().removeClass('show').addClass('hide');
		$('.bp3').delay(500).slideDown().removeClass('hide').addClass('show');
	}
}

//Busqueda 4
function openB4() {
	if ($('.bp4').hasClass('hide') && $('.bs4').hasClass('hide')) {
		$('.bs4').slideDown().removeClass('hide').addClass('show');
	} else if ($('.bp4').hasClass('hide') && $('.bs4').hasClass('show')) {
		$('.bs4').slideUp().removeClass('show').addClass('hide');
	} else if ($('.bp4').hasClass('show') && $('.bs4').hasClass('hide')) {
		$('.bp4').slideUp().removeClass('show').addClass('hide');
		$('.bs4').delay(500).slideDown().removeClass('hide').addClass('show');
	}
}

function openP4() {
	if ($('.bs4').hasClass('hide') && $('.bp4').hasClass('hide')) {
		$('.bp4').slideDown().removeClass('hide').addClass('show');
	} else if ($('.bs4').hasClass('hide') && $('.bp4').hasClass('show')) {
		$('.bp4').slideUp().removeClass('show').addClass('hide');
	} else if ($('.bs4').hasClass('show') && $('.bp4').hasClass('hide')) {
		$('.bs4').slideUp().removeClass('show').addClass('hide');
		$('.bp4').delay(500).slideDown().removeClass('hide').addClass('show');
	}
}

function openPost() {
	$('#postulacion-voluntaria').slideToggle();
}