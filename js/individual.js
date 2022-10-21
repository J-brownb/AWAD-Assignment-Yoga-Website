let url = "https://lightning-yoga-api.herokuapp.com/yoga_poses/1";

const displayResults = function (url) {
  $.ajax(url).done(function (results) {
    let img = results.img_url;
    let all =
      `<li>` +
      `<strong>English Name:</strong> ${results.english_name} ` +
      `<br>` +
      `<strong>Sanskrit Name:</strong> ${results.sanskrit_name} ` +
      `<br>` +
      `<img src=${img} width="100" height="100">` +
      `<br>` +
      `<strong>Yoga Categories:</strong> ${results.yoga_categories[0].name}` +
      `, ` +
      `${results.yoga_categories[1].name}` +
      `, ` +
      `${results.yoga_categories[2].name}` +
      `</li>`;
    $("#pose").append(all);
  });
};

displayResults(url);
