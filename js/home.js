let url = "https://lightning-yoga-api.herokuapp.com/yoga_poses";

//Display All
const displayResults = function (url) {
  $.ajax(url).done(function (results) {
    for (let i = 0; i < results.items.length; i++) {
      let img = results.items[i].img_url;
      let all =
        `<li>` +
        `<img src=${img} width="200" height="200">` +
        `<br>` +
        `<strong>English Name:</strong> ${results.items[i].english_name} ` +
        `<br>` +
        `<strong>Sanskrit Name:</strong> ${results.items[i].sanskrit_name} ` +
        `<br>` +
        `<strong>Yoga Category:</strong> ${results.items[i].yoga_categories[i].name} ` +
        `<br>` +
        `</li>`;

      $("#results").append(all);
    }
  });
};

displayResults(url);

//Search
$("#exerciseSearchBtn").on("click", function () {
  $("#results").empty();
  let url = "https://lightning-yoga-api.herokuapp.com/yoga_poses";
  let searchTerm = $("#searching").val();
  url += "?english_name=" + searchTerm;
  displayResults(url);
});
