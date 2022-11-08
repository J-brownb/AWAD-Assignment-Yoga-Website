let url = "https://lightning-yoga-api.herokuapp.com/yoga_poses";
//Loading Icon
let loadingIcon = `<div class="d-flex justify-content-center" id="spinner">
<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
</div>`;
let loading = document.getElementById("loadingarea");
loading.innerHTML = loadingIcon;

//Display All
function displayResults(url) {
  fetch(url)
    .then((response) => response.json())
    .then(function (results) {
      let poses = document.getElementById("results");
      // for (let i = 0; i < results.items.length; i++) {
      for (let i = 0; i < 8; i++) {
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
        loading.innerHTML = " ";
      }
    });
}

displayResults(url);

//Search
let searchBtn = document.getElementById("exerciseSearchBtn");
let poses = document.getElementById("results");
searchBtn.addEventListener("click", function () {
  poses.innerHTML = "";
  let searchTerm = document.getElementById("searching").value;
  let url = "https://lightning-yoga-api.herokuapp.com/yoga_poses";
  url += "?english_name=" + searchTerm;
  displayResults(url);
});
