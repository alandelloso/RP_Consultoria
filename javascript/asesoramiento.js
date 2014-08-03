$(document).on('ready', app);

function app () 
{
	$('#n1').on('click', SeleccionDePersonal);
}

function SeleccionDePersonal() 
{
	if ($('#sp1').hasClass('icon-add')) {
		$('#p1').sildeToggle();
	}
}