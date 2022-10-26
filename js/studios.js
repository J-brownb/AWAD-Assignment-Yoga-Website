//Results
let url =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCYqnXeh46RRRThzx47Cg0J0DH16Jxcp2Q&query=yoga-studios-in-ipswich";

//Display All
const displayResults = function (url) {
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
};
displayResults(url);

//Map
function initMap() {
  let options = {
    zoom: 11,
    center: { lat: 52.0567, lng: 1.1482 },
  };

  let map = new google.maps.Map(document.getElementById("map"), options);

  function addMarker(lat, lng) {
    let marker = new google.maps.Marker({
      position: lat,
      lng,
      map,
    });
  }
  addMarker({ lat: 52.0167, lng: 1.1482 });
  // addMarker({ lat: 52.0267, lng: 1.1252 });
  // addMarker({ lat: 52.0467, lng: 1.1362 });
}

//lat lng
let latlng = [];
const getLatLng = function (url) {
  $.ajax(url).done(function (results) {
    for (let i = 0; i < results.results.length; i++) {
      let latlng = [
        results.results[i].geometry.location.lat,
        results.results[i].geometry.location.lng,
      ];
      console.log(latlng);
    }
  });
};
getLatLng(url);
console.log(latlng);

// latArray.push(results.results[i].geometry.location.lat);
// lngArray.push(results.results[i].geometry.location.lng);
