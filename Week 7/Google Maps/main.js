function initMap() {
  var mapZoomIn = new google.maps.Map(document.getElementById('map1'), {
    center: {
      lat: 37.774929,
      lng: -122.419416,
    },
    zoom: 14
  });

  var mapZoomOut = new google.maps.Map(document.getElementById('map2'), {
    center: {
      lat: 37.906037,
      lng: -122.544976,
    },
    zoom: 13
  });

}
