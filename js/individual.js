let url = "https://lightning-yoga-api.herokuapp.com/yoga_poses/5";

function displayResults(url) {
  fetch(url)
    .then((response) => response.json())
    .then(function (results) {
      //img
      let img = results.img_url;
      $("#image").append(`<img src=${img} width="600" height="400">`);
      //names
      let names =
        `${results.english_name} ` + `| ` + `${results.sanskrit_name} `;
      $(".names").append(names);
      let all =
        `The English name for this pose is ${results.english_name} and the Sanskrit name is ${results.sanskrit_name}. This pose falls under the following categories of yoga:` +
        `<br>` +
        `<br>` +
        `<ul>` +
        `<li>` +
        "<strong>" +
        `${results.yoga_categories[0].name}` +
        "</strong>" +
        ` - ` +
        `${results.yoga_categories[0].description}` +
        `</li>` +
        `<li>` +
        "<strong>" +
        `${results.yoga_categories[1].name}` +
        "</strong>" +
        ` - ` +
        `${results.yoga_categories[1].description}` +
        `</li>` +
        `<li>` +
        "<strong>" +
        `${results.yoga_categories[2].name}` +
        "</strong>" +
        ` - ` +
        `${results.yoga_categories[2].description}` +
        `</li>`;
      $("#info").append(all);
    });
}

displayResults(url);
