let url = "https://lightning-yoga-api.herokuapp.com/yoga_poses/5";

const displayResults = function (url) {
  $.ajax(url).done(function (results) {
    //img
    let img = results.img_url;
    $("#image").append(`<img src=${img} width="500" height="500">`);
    //names
    let names = `${results.english_name} ` + `| ` + `${results.sanskrit_name} `;
    $(".names").append(names);
    let all =
      `The English name for this pose is ${results.english_name} and the Sanskrit name is ${results.sanskrit_name}.` +
      `<br>` +
      `<br>` +
      `This pose falls under the following categories of yoga:` +
      `<br>` +
      `<br>` +
      `<ul>` +
      `<li>` +
      `${results.yoga_categories[0].name}` +
      `</li>` +
      `<li>` +
      `${results.yoga_categories[1].name}` +
      `</li>` +
      `<li>` +
      `${results.yoga_categories[2].name}` +
      `</li>`;
    $("#info").append(all);
  });
};

displayResults(url);
