function myMap() {
  var mapProp= {
      center:new google.maps.LatLng(53.47950862015143, -2.245676076224575),
      zoom:15,
    };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

var marker = new google.maps.Marker({position: myCenter});

marker.setMap(map);
