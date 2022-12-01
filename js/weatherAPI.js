//Loading Icon
let loadingIcon = `<div class="d-flex justify-content-center" id="spinner">
<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
</div>`;
let loading = document.getElementById("spinner");
loading.innerHTML = loadingIcon;

//API call
let weatherUrl =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ipswich?unitGroup=metric&key=SNJXA2TKPSX2QQLTQTH6SS6LY&contentType=json";

fetch(weatherUrl)
  .then((response) => response.json())
  .then((data) => {
    let weather = document.getElementById("weather");
    for (let i = 0; i < 14; i++) {
      let all =
        `<li>` +
        `<img src=/images/${data.days[i].icon}.png width="50" height="50">` +
        `<br>` +
        `${data.days[i].datetime}` +
        `<br>` +
        `<strong>` +
        `${data.days[i].conditions}` +
        `</strong>` +
        `<br>` +
        `${data.days[i].temp}c` +
        `<br>` +
        `${data.days[i].description}` +
        `<br>` +
        `</li>`;
      console.log(data.days[i].datetime);
      weather.innerHTML += all;
      loading.innerHTML = "";
    }
  });
