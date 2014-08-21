$(document).on('ready', noticias);

function noticias() {
	//Events
	$('.nb').on('click', openSocial);

	//Filter
	$('#filtro').on('change',filt);
}

//Funciones Externas
function openSocial() {
	$(this).next('.ns').slideToggle('600');
}

function filt() {
	var indice = $(this).val();
	var nnew = $('.noticia-new').size();
	var total = nnew-1;
	var laboral = $('.laboral').size();
	var eventos = $('.eventos').size();
	
	if (indice == 1) {
		if (laboral % 2 == 1) {
		$('.impar').css({"visibility": "hidden", "display": "inline-block"});
		$('.laboral').fadeIn('slow');
		$('.eventos').fadeOut('fast');
		} else {
		$('.impar').css({"display": "none"});
		$('.laboral').fadeIn('slow');
		$('.eventos').fadeOut('fast');
		}
	} else if (indice == 2) {
		if (eventos % 2 == 1) {
		$('.impar').css({"visibility": "hidden", "display": "inline-block"});
		$('.eventos').fadeIn('slow');
		$('.laboral').fadeOut('fast');
		} else {
		$('.impar').css({"display": "none"});
		$('.eventos').fadeIn('slow');
		$('.laboral').fadeOut('fast');
		}
	} else if (indice == 0) {
		if (total % 2 == 1) {
		$('.impar').css({"visibility": "hidden", "display": "inline-block"});
		$('.eventos').fadeIn();
		$('.laboral').fadeIn();
	} else  {
		$('.impar').css({"display": "none"});
		$('.eventos').fadeIn();
		$('.laboral').fadeIn();
	}
	}
}