let url =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCYqnXeh46RRRThzx47Cg0J0DH16Jxcp2Q&query=yoga-studios-in-ipswich";

console.log("test");

//Display All
const displayResults = function (url) {
  $.ajax(url).done(function (results) {
    for (let i = 0; i < 10; i++) {
      let all =
        `<li>` +
        `<strong>Name:</strong> ${results[1].name} ` +
        `<br>` +
        `</li>`;

      $("#map").append(all);
      console.log(all);
    }
  });
};

displayResults(url);
