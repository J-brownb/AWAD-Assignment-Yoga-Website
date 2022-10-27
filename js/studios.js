//Results
let url =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCYqnXeh46RRRThzx47Cg0J0DH16Jxcp2Q&query=yoga-studios-in-ipswich";

//Display All
function displayResults(url) {
  $.ajax(url).done(function (results) {
    for (let i = 0; i < results.results.length; i++) {
      let all =
        `<li>` +
        `<strong>${results.results[i].name} ` +
        `</strong>` +
        `<br>` +
        `<br>` +
        `${results.results[i].formatted_address} ` +
        `<br>` +
        `</li>`;

      $("#results").append(all);
    }
  });
}
displayResults(url);

//Map
function initMap() {
  let options = {
    zoom: 11,
    center: { lat: 52.0567, lng: 1.1482 },
  };

  //lat lng arrays
  let lat = [];
  let lng = [];

  // get lat and lng from api
  function getLatLng(url) {
    $.ajax(url).done(function (results) {
      //loop through lat lng values, push to arrays
      for (let i = 0; i < results.results.length; i++) {
        lat.push(results.results[i].geometry.location.lat);
        lng.push(results.results[i].geometry.location.lng);
        //call add marker with  array values
        addMarker({ lat: lat[i], lng: lng[i] });
      }
    });
  }
  getLatLng(url);

  let map = new google.maps.Map(document.getElementById("map"), options);

  // function to add market
  function addMarker(lat, lng) {
    let marker = new google.maps.Marker({
      position: lat,
      lng,
      map,
    });
  }
}
