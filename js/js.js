let type = "cardio";

//Muscle Search
let muscle = "calves";
$.ajax({
  method: "GET",
  url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle,
  headers: { "X-Api-Key": "gmIBEECCZrQsin5xQH6KEA==JaIyg13mvczmyLxX" },
  contentType: "application/json",

  success: function (result) {
    console.log(result);
  },
});

//Specfic Exercise
let exercise = "calves";
$.ajax({
  method: "GET",
  url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle,
  headers: { "X-Api-Key": "gmIBEECCZrQsin5xQH6KEA==JaIyg13mvczmyLxX" },
  contentType: "application/json",

  success: function (result) {
    console.log(result.name);
  },
});
