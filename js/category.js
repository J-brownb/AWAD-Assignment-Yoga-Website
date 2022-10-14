let muscle = "biceps";

const settings = {
  async: true,
  crossDomain: true,
  url:
    "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=" +
    muscle,
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "93a1747e2cmsh37117e509704babp13eb9fjsn4861d9822a66",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  for (let i = 0; i < response.length; i++) {
    // let gif = response[i].gifUrl;
    $("#playground").append(`${response[i].name} <br><br> `);
    $("#playground").append(`${response[i].instructions} <br><br> `);
  }
});
