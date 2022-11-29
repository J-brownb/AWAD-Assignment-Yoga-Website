let url = "https://lightning-yoga-api.herokuapp.com/yoga_poses/5";

//Dropdown menu
let dropdown = document.getElementById("dropdownmenu");
let menuItems = document.getElementById("menuitems");
dropdown.addEventListener("click", function () {
  menuItems.style.display = "block";
});

dropdown.addEventListener("mouseleave", function () {
  menuItems.style.display = "none";
});

//Display results
function displayResults(url) {
  fetch(url)
    .then((response) => response.json())
    .then(function (results) {
      let info = document.getElementById("info");
      //img
      let img = results.img_url;
      let imgContainer = document.getElementById("image");
      imgContainer.innerHTML = `<img src=${img} width="500" height="400">`;
      //Header
      let header = document.getElementById("header");
      let names =
        `${results.english_name} ` + `| ` + `${results.sanskrit_name} `;
      header.innerHTML = names;

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
        `<br>` +
        `<li>` +
        "<strong>" +
        `${results.yoga_categories[1].name}` +
        "</strong>" +
        ` - ` +
        `${results.yoga_categories[1].description}` +
        `</li>` +
        `<br>` +
        `<li>` +
        "<strong>" +
        `${results.yoga_categories[2].name}` +
        "</strong>" +
        ` - ` +
        `${results.yoga_categories[2].description}` +
        `</li>`;
      //Append info to results
      info.innerHTML += all;
    });
}
displayResults(url);

var toastElList = [].slice.call(document.querySelectorAll(".toast"));
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option);
});

let toastBtn = document.getElementById("add");
toastBtn.addEventListener("click", function () {
  toast.show();
});
