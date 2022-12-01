//Api Options
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "93a1747e2cmsh37117e509704babp13eb9fjsn4861d9822a66",
    "X-RapidAPI-Host": "exercises2.p.rapidapi.com",
  },
};
let APIurl = "https://exercises2.p.rapidapi.com/?count=20";

//Api Call All Results
function apiCall(APIurl, callCount) {
  fetch(APIurl, options)
    .then((response) => response.json())
    .then((response) => {
      let poses = document.getElementById("results");
      let count = callCount;
      for (let i = 0; i < count; i++) {
        let img = response[i].image;
        let all =
          `<li>` +
          `<img src=${img} width="200" height="200">` +
          `<br>` +
          `<strong>Exercise Name:</strong> ${response[i].name} ` +
          `<br>` +
          `<strong>Body Part Focus:</strong> ${response[i].bodyPart} ` +
          `<br>` +
          `<strong>Muscle Target:</strong> ${response[i].muscleTarget} ` +
          `</li>`;
        poses.innerHTML += all;
        loading.innerHTML = " ";
      }
    });
}
apiCall(APIurl, 4);

//Loading Element
let loadingIcon = `<div class="d-flex justify-content-center" id="spinner">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  </div>`;
let loading = document.getElementById("loadingarea");
loading.innerHTML = loadingIcon;

//Dropdown menu
let dropdown = document.getElementById("dropdownmenu");
let menuItems = document.getElementById("menuitems");
dropdown.addEventListener("click", function () {
  menuItems.style.display = "block";
});
dropdown.addEventListener("mouseleave", function () {
  menuItems.style.display = "none";
});

//Original code. Had to be removed due to API being shutdown..

//Load more poses
let loadMore = document.getElementById("loadmore");
let loadLess = document.getElementById("loadfewer");
loadMore.addEventListener("click", function () {
  let APIurl = "https://exercises2.p.rapidapi.com/?count=20";
  loadMore.classList.add("hidden");
  loadLess.classList.remove("hidden");
  poses.innerHTML = "";
  document.documentElement.scrollTop = 60;
  apiCall(APIurl, 20);
});

//Load fewer poses
loadLess.addEventListener("click", function () {
  poses.innerHTML = "";
  apiCall(APIurl, 4);
  loadMore.classList.remove("hidden");
  loadLess.classList.add("hidden");
  document.documentElement.scrollTop = 60;
});

//Search functionality - searches muscle target
let searchBtn = document.getElementById("exerciseSearchBtn");
let poses = document.getElementById("results");
searchBtn.addEventListener("click", function () {
  poses.innerHTML = "";
  let searchTerm = document.getElementById("searching").value;
  let APIurl =
    `https://exercises2.p.rapidapi.com/?muscleTarget=` +
    `${searchTerm}` +
    `&count=20`;
  apiCall(APIurl, 20);
  console.log(APIurl);
});

// //Category autocomplete
// var search_terms = ["biceps"];

// function autocompleteMatch(input) {
//   if (input == "") {
//     return [];
//   }
//   var reg = new RegExp(input);
//   return search_terms.filter(function (term) {
//     if (term.match(reg)) {
//       return term;
//     }
//   });
// }

// function showResults(val) {
//   res = document.getElementById("result");
//   res.innerHTML = "";
//   let list = "";
//   let terms = autocompleteMatch(val);
//   for (i = 0; i < terms.length; i++) {
//     list += "<li>" + terms[i] + "</li>";
//   }
//   res.innerHTML = "<ul>" + list + "</ul>";
// }
