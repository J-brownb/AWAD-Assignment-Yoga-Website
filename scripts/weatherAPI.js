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
let loading = document.getElementById("spinner");
loading.innerHTML = loadingIcon;

//API call
let weatherUrl =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ipswich?unitGroup=metric&key=SNJXA2TKPSX2QQLTQTH6SS6LY&contentType=json";

//Function to show weekly forecast
function weatherCall(count, divID, iCount) {
  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      let weather = document.getElementById(divID);
      for (let i = iCount; i < count; i++) {
        let sunrise = `${data.days[i].sunrise}`;
        let sunriseShort = sunrise.slice(0, 5);
        let sunset = `${data.days[i].sunset}`;
        let sunsetShort = sunset.slice(0, 5);
        let all =
          `<li>` +
          `<div class ="date">` +
          `<h3>` +
          `${data.days[i].datetime}` +
          `</h3>` +
          `</div>` +
          `<strong>` +
          `${data.days[i].conditions}` +
          `</strong>` +
          `<br>` +
          `<br>` +
          `<img src=/images/${data.days[i].icon}.png width="50" height="50">` +
          `<br>` +
          `<br>` +
          `🌡️ ${data.days[i].temp}c` +
          ` |` +
          ` 🌧️ ${data.days[i].precipprob}%` +
          ` |` +
          `💨 ${data.days[i].windspeed}mph` +
          `<br>` +
          `☀️ ${sunriseShort}AM` +
          ` |` +
          `🌕 ${sunsetShort}PM` +
          `<hr>` +
          `${data.days[i].description}` +
          `<br>` +
          `</li>`;
        divID.innerHTML += all;
        loading.innerHTML = "";
      }
    });
}
weatherCall(7, weather, 1);

//Call function to show current day
weatherCall(1, single, 0);

//Generate daily summary
function dailySummary() {
  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(weeklysummary);
      document.getElementById(summary);
      let summaryText =
        `Today's forecast is expected to be: ${data.days[0].description}` +
        `<br>` +
        `<br>` +
        `There is a ${data.days[0].precipprob}% chance of rain today, the temperature will be ${data.days[0].temp}c and the windspeed will be  ${data.days[0].windspeed}mph`;
      summary.innerHTML += summaryText;
      weeklysummary.innerHTML = `${data.description}`;
    });
}

dailySummary();

console.log("test");
