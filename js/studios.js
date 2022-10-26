//Results
let url =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCYqnXeh46RRRThzx47Cg0J0DH16Jxcp2Q&query=yoga-studios-in-ipswich";
//

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
