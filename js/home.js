//Settings
const settings = {
  async: true,
  crossDomain: true,
  url: "https://lightning-yoga-api.herokuapp.com/yoga_poses",
  method: "GET",
};

//Display All
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

//searching an inidivudual pose, below returns boat
// https://lightning-yoga-api.herokuapp.com/yoga_poses?english_name=boat

//Showing an entire category, below returns hatha category
// https://lightning-yoga-api.herokuapp.com/yoga_poses?yoga_category_name=hatha
