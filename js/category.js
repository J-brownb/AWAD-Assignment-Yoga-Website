let url = "https://lightning-yoga-api.herokuapp.com/yoga_categories";
let catName =
  "https://lightning-yoga-api.herokuapp.com/yoga_poses?yoga_category_name=";

//Dropdown menu
let dropdown = document.getElementById("dropdownmenu");
let menuItems = document.getElementById("menuitems");
dropdown.addEventListener("click", function () {
  menuItems.style.display = "block";
});

dropdown.addEventListener("mouseleave", function () {
  menuItems.style.display = "none";
});

//Loading Icon
let loadingIcon = `<div class="d-flex justify-content-center" id="spinner">
<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
</div>`;
let loading = document.getElementById("loadingarea");
loadingarea.innerHTML = loadingIcon;

function displayResults(url) {
  fetch(url)
    .then((response) => response.json())
    .then(function (results) {
      let poses = document.getElementById("category");
      for (let i = 0; i < 12; i++) {
        //img
        let img = results.items[i].yoga_poses[1].img_url;
        //url
        let catUrl =
          "http://127.0.0.1:5501/yoga-categories/core-yoga-poses.html";
        //rest of data
        let all =
          `<li>` +
          `<img src=${img} width="200" height="200">` +
          `<br>` +
          `</h3>` +
          `<br>` +
          `We have ${results.items[i].yoga_poses.length} ` +
          `${results.items[i].name}` +
          ` for you to try!` +
          `<br>` +
          `<br>` +
          `<a href="${catUrl}">` +
          `View more poses in this category` +
          `</a>` +
          `</li>`;
        //Append info to results
        poses.innerHTML += all;
        loadingarea.innerHTML = " ";
      }
    });
}

displayResults(url);
