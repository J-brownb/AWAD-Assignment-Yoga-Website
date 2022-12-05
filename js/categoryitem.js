//Dropdown menu
let dropdown = document.getElementById("dropdownmenu");
let menuItems = document.getElementById("menuitems");
dropdown.addEventListener("click", function () {
  menuItems.style.display = "block";
});
dropdown.addEventListener("mouseleave", function () {
  menuItems.style.display = "none";
});

//Code below removed due to API being shutdown :( left for reference

// let url =
//   "https://lightning-yoga-api.herokuapp.com/yoga_poses?yoga_category_name=core_yoga_poses";
// let category = document.querySelector("#category");

// //Loading Icon
// let loadingIcon = `<div class="d-flex justify-content-center" id="spinner">
// <div class="spinner-border" role="status">
//   <span class="sr-only">Loading...</span>
// </div>
// </div>`;
// let loading = document.getElementById("loadingarea");
// loadingarea.innerHTML = loadingIcon;

// //Display All
// function displayResults(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then(function (results) {
//       let desc =
//         `${results.items[0].yoga_categories[0].description}` +
//         ` We currently have ` +
//         `${results.items.length}` +
//         ` amazing core yoga poses for you to try.`;
//       $(".description").append(desc);
//       let poses = document.getElementById("categorylist");
//       for (let i = 0; i < results.items.length; i++) {
//         let img = results.items[i].img_url;
//         let all =
//           `<li>` +
//           `<img src=${img} width="200" height="200">` +
//           `<br>` +
//           `<strong>English Name:</strong> ${results.items[i].english_name} ` +
//           `<br>` +
//           `<strong>Sanskrit Name:</strong> ${results.items[i].sanskrit_name} ` +
//           `</li>`;
//         //Append info to results
//         poses.innerHTML += all;
//         loadingarea.innerHTML = " ";
//       }
//     });
// }

// displayResults(url);
