let url =
  "https://lightning-yoga-api.herokuapp.com/yoga_poses?yoga_category_name=core_yoga_poses";

let category = document.querySelector("#category");

//Display All
function displayResults(url) {
  fetch(url)
    .then((response) => response.json())
    .then(function (results) {
      let desc =
        `${results.items[0].yoga_categories[0].description}` +
        `<br>` +
        ` We currently have ` +
        `${results.items.length}` +
        ` amazing core yoga poses for you to try.`;
      $(".description").append(desc);

      console.log(desc);
      for (let i = 0; i < results.items.length; i++) {
        let img = results.items[i].img_url;
        let all =
          `<li>` +
          `<img src=${img} width="200" height="200">` +
          `<br>` +
          `<strong>English Name:</strong> ${results.items[i].english_name} ` +
          `<br>` +
          `<strong>Sanskrit Name:</strong> ${results.items[i].sanskrit_name} ` +
          `</li>`;
        $("#categorylist").append(all);
      }
    });
}

displayResults(url);
