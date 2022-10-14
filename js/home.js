//Searching
const settings = {
  async: true,
  crossDomain: true,
  url: "https://lightning-yoga-api.herokuapp.com/yoga_poses",
  method: "GET",
};

$.ajax(settings).done(function (response) {
  for (let i = 0; i < response.items.length; i++) {
    let img = response.items[i].img_url;
    let all =
      `<li>` +
      `<img src=${img} width="250" height="250">` +
      `<br>` +
      `<strong>English Name:</strong> ${response.items[i].english_name} ` +
      `<br>` +
      `<strong>Sanskrit Name:</strong> ${response.items[i].sanskrit_name} ` +
      `<br>` +
      `</li>`;

    $("#playgroundResults").append(all);
  }
});
