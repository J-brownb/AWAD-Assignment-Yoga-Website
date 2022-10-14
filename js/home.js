let muscle = "biceps";

const settings = {
  async: true,
  crossDomain: true,
  url:
    "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps" +
    muscle,
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "93a1747e2cmsh37117e509704babp13eb9fjsn4861d9822a66",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  },
};

const print = function () {
  $.ajax(settings).done(function (response) {
    for (let i = 0; i < 3; i++) {
      let gif = response[i].gifUrl;
      $("#playground").append(response[i].name);
      // $("#playground").append(`<img src=${gif}>`);
    }
  });
};

// const catSettings = {
//   async: true,
//   crossDomain: true,
//   url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "93a1747e2cmsh37117e509704babp13eb9fjsn4861d9822a66",
//     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//   },
// };

// // //This works to query one at pos 0, 1 result
// // $.ajax(settings).done(function (response) {
// //   console.log(response);
// //   let gif = response[0].gifUrl;
// //   console.log(gif);
// //   $("#playground").append(response[0].equipment);
// //   $("#playground").append(`<img src=${gif}>`);
// // });

// //This works to get all from one category - category page sorted!
// const catSearch = function () {
//   $.ajax(catSettings).done(function (response) {
//     for (let i = 0; i < 3; i++) {
//       let gif = response[i].gifUrl;
//       $("#playground").append(response[i].name);
//       $("#playground").append(`<img src=${gif}>`);
//     }
//   });
// };

// catSearch();

// //Searching
// const indSettings = {
//   async: true,
//   crossDomain: true,
//   url: "https://exercisedb.p.rapidapi.com/exercises/name/",
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "93a1747e2cmsh37117e509704babp13eb9fjsn4861d9822a66",
//     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//   },
// };

// $("#exerciseSearchBtn").on("click", function () {
//   $.ajax(indSettings).done(function (response) {
//     let search = $("#searching").val();
//     // $("#playground").append(response[i].name);
//     for (let i = 0; i < 3; i++) {
//       let gif = response[i].gifUrl;
//       $("#playground").append(response[i].name);
//       $("#playground").append(`<img src=${gif}>`);
//     }
//   });
// });
