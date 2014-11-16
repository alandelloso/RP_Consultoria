function initialize() {
  var rpConsultoria = new google.maps.LatLng(-34.6356038,-58.397069999999985);
  var mapOptions = {
    zoom: 16,
    center: rpConsultoria
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: rpConsultoria,
      map: map,
      title: 'RP Consultoría'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);