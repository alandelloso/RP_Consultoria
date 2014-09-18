$(document).on('ready', app);

function app() {
	$('.sb').on('click', openShare);
	$('.pb').on('click', openPost);
	$('#post-volunt').on('click', openVol);
}

//Funciones Externas	
function openShare() {
	var bp = $(this).closest('.busqueda-botones').find('.bp');
	var bs = $(this).closest('.busqueda-botones').find('.bs');
	if (bp.hasClass('show') && bs.hasClass('hide')) {
		bp.slideUp().removeClass('show').addClass('hide');
		bs.delay(500).slideDown().removeClass('hide').addClass('show');
	} else if (bp.hasClass('hide') && bs.hasClass('show')) {
		bs.slideUp().removeClass('show').addClass('hide');
	} else {
		bs.slideDown().removeClass('hide').addClass('show');
	}
}

function openPost() {
	var bp = $(this).closest('.busqueda-botones').find('.bp');
	var bs = $(this).closest('.busqueda-botones').find('.bs');
	if (bs.hasClass('show') && bp.hasClass('hide')) {
		bs.slideUp().removeClass('show').addClass('hide');
		bp.delay(500).slideDown().removeClass('hide').addClass('show');
	} else if (bs.hasClass('hide') && bp.hasClass('show')) {
		bp.slideUp().removeClass('show').addClass('hide');
	} else {
		bp.slideDown().removeClass('hide').addClass('show');
	}
}


function openVol() {
	$('#postulacion-voluntaria').slideToggle();
}

