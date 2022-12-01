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
      let poses = document.getElementById("category");
      let count = callCount;
      for (let i = 0; i < count; i++) {
        let bodyParts = [];
        bodyParts.push(response[i].bodyPart);
        console.log(bodyParts);
        let img = response[i].image;
        let all =
          `<li>` +
          `<img src=${img} width="200" height="200">` +
          `<br>` +
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
apiCall(APIurl, 20);

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

let catName = "https://exercises2.p.rapidapi.com/?bodyPart=";

//old / not working

//       let poses = document.getElementById("category");
//       for (let i = 0; i < 12; i++) {
//         //img
//         let img = results.items[i].yoga_poses[1].img_url;
//         //url
//         let catUrl =
//           "http://127.0.0.1:5501/yoga-categories/core-yoga-poses.html";
//         //rest of data
//         let all =
//           `<li>` +
//           `<img src=${img} width="200" height="200">` +
//           `<br>` +
//           `</h3>` +
//           `<br>` +
//           `We have ${results.items[i].yoga_poses.length} ` +
//           `${results.items[i].name}` +
//           ` for you to try!` +
//           `<br>` +
//           `<br>` +
//           `<a href="${catUrl}">` +
//           `View more poses in this category` +
//           `</a>` +
//           `</li>`;
//         //Append info to results
//         poses.innerHTML += all;
//         loadingarea.innerHTML = " ";
//       }
//     });
// }

// displayResults(url);

// let url = "https://lightning-yoga-api.herokuapp.com/yoga_categories";
