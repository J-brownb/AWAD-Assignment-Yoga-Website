let url = "https://lightning-yoga-api.herokuapp.com/yoga_categories";

const displayResults = function (url) {
  $.ajax(url).done(function (results) {
    for (let i = 0; i < 12; i++) {
      let img = results.items[i].yoga_poses[1].img_url;
      let all =
        `<li>` +
        `<img src=${img} width="200" height="200">` +
        `<br>` +
        `<h3>` +
        `${results.items[i].name}` +
        `</h3>` +
        `<br>` +
        // `<strong>Desription:</strong> ${results.items[i].description} ` +
        `We have ${results.items[i].yoga_poses.length}` +
        ` amazing ` +
        `${results.items[i].name}` +
        ` for you to try!` +
        `<br>` +
        // `<strong>Category URL:</strong> ${
        //   catName + results.items[i].short_name
        // } ` +
        `<br>` +
        `</li>`;
      $("#category").append(all);
    }
  });
};

displayResults(url);
