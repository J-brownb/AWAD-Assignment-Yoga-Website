function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(52.05751341054324, 1.1500896897552568),
    zoom: 10,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
