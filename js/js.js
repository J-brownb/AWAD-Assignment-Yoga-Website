const settings = {
  async: true,
  crossDomain: true,
  url: "https://exercisedb.p.rapidapi.com/exercises",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "93a1747e2cmsh37117e509704babp13eb9fjsn4861d9822a66",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
