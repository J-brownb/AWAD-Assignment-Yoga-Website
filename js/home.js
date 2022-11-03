let url = "https://lightning-yoga-api.herokuapp.com/yoga_poses";

//Display All
function displayResults(url) {
  fetch(url)
    .then((response) => response.json())
    .then(function (results) {
      let poses = document.getElementById("results");
      for (let i = 0; i < 10; i++) {
        let img = results.items[i].img_url;
        let all =
          `<li>` +
          `<img src=${img} width="200" height="200">` +
          `<br>` +
          `<strong>English Name:</strong> ${results.items[i].english_name} ` +
          `<br>` +
          `<strong>Sanskrit Name:</strong> ${results.items[i].sanskrit_name} ` +
          // `<br>` +
          // `<strong>Yoga Categories:</strong> ${results.items[i].yoga_categories[i].name}` +
          // `, ` +
          // `${results.items[i].yoga_categories[i + 1].name}` +
          // `, ` +
          // `${results.items[i].yoga_categories[i + 2].name}` +
          `</li>`;
        poses.innerHTML += all;
        // $("#results").append(all);
      }
    });
}

displayResults(url);

//Search
$("#exerciseSearchBtn").on("click", function () {
  $("#results").empty();
  let url = "https://lightning-yoga-api.herokuapp.com/yoga_poses";
  let searchTerm = $("#searching").val();
  url += "?english_name=" + searchTerm;
  displayResults(url);
});
