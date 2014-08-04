$(document).on('ready', app);

function app () 
{
	$('#n1').on('click', seleccionDePersonal);
	$('#n3').on('click', contable);
	$('#n4').on('click', impositivo);
	$('#n5').on('click', asesoriaEnNegocios);
}

function seleccionDePersonal() 
{
	if ($('#sp1').hasClass('icon-add')) {
		$('#sp1').removeClass('icon-add').addClass('icon-subtract');
		$('#hide1').slideDown();
	} else {
		$('#sp1').removeClass('icon-subtract').addClass('icon-add');
		$('#hide1').slideUp();
	}
}

function contable() 
{
	if ($('#sp3').hasClass('icon-add')) {
		$('#sp3').removeClass('icon-add').addClass('icon-subtract');
		$('#hide3').slideDown();
	} else {
		$('#sp3').removeClass('icon-subtract').addClass('icon-add');
		$('#hide3').slideUp();
	}
}

function impositivo() 
{
	if ($('#sp4').hasClass('icon-add')) {
		$('#sp4').removeClass('icon-add').addClass('icon-subtract');
		$('#hide4').slideDown();
	} else {
		$('#sp4').removeClass('icon-subtract').addClass('icon-add');
		$('#hide4').slideUp();
	}
}

function asesoriaEnNegocios() 
{
	if ($('#sp5').hasClass('icon-add')) {
		$('#sp5').removeClass('icon-add').addClass('icon-subtract');
		$('#hide5').slideDown();
	} else {
		$('#sp5').removeClass('icon-subtract').addClass('icon-add');
		$('#hide5').slideUp();
	}
}