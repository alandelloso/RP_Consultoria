$(document).on('ready', busquedas);
$(window).on('resize', busquedas);


function busquedas(){
	var doc_width = $(document).width();

	if(doc_width > 1165) {
		var container_constant = 1101;
		var card_constant = 545;
		var container_width = $('.mdc-card__media').width();
		var ideal_width = (container_width*card_constant)/container_constant;
		
		$('.mdc-card').css({"width": ideal_width});

	} else if(doc_width < 1165) {
		$('.mdc-card').css({"width": "100%"});
	}

}