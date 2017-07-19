function initMap() {
  var mapContainer = document.getElementById('map');
  if(mapContainer) {
    var uluru = {lat: 56.111605, lng: 8.117045};
    var map = new google.maps.Map(mapContainer, {
      zoom: 12,
      center: uluru,
      mapTypeId: 'satellite'
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
}
