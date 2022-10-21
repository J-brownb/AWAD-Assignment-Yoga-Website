let url = "https://lightning-yoga-api.herokuapp.com/yoga_categories";
let catName =
  "https://lightning-yoga-api.herokuapp.com/yoga_poses?yoga_category_name=";

const displayResults = function (url) {
  $.ajax(url).done(function (results) {
    for (let i = 0; i < 12; i++) {
      let img = results.items[i].yoga_poses[1].img_url;
      let catUrl = "http://127.0.0.1:5501/yoga-categories/core-yoga-poses.html";

      let all =
        `<li>` +
        `<img src=${img} width="200" height="200">` +
        `<br>` +
        `<h3>` +
        `${results.items[i].name}` +
        `</h3>` +
        `<br>` +
        `We have ${results.items[i].yoga_poses.length}` +
        ` amazing ` +
        `${results.items[i].name}` +
        ` for you to try!` +
        `<br>` +
        `<br>` +
        `<a href="${catUrl}">` +
        `View more poses in this category` +
        `</a>` +
        `</li>`;
      $("#category").append(all);
    }
  });
};

displayResults(url);
