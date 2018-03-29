function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    mapTypeId: 'roadmap',
    center: {lat: 27.964157, lng: -82.452606},
    zoom: 15
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

    infoWindow.setPosition(pos);
    infoWindow.setContent('You are here.');
    infoWindow.open(map);
    map.setCenter(pos);
  },


/*
  var micOneLatlng = ;
    var marker = new google.maps.Marker({
    position: micOneLatlng,
    map: map
  });
*/



    //If there is a location error
    function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  };
