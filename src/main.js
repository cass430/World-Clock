function updateTime() {
  // vancouver
  let vancouverElement = document.querySelector("#vancouver");
  if (vancouverElement) {
    let vancouverDateElemnt = vancouverElement.querySelector(".date");
    let vancouverTimeElemnt = vancouverElement.querySelector(".time");
    let vancouverTime = moment().tz("America/Vancouver");

    vancouverDateElemnt.innerHTML = moment().format("dddd MMM Do, YYYY");
    vancouverTimeElemnt.innerHTML = vancouverTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }
  // new-york
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElemnt = newYorkElement.querySelector(".date");
    let newYorkTimeElemnt = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElemnt.innerHTML = moment().format("dddd MMM Do, YYYY");
    newYorkTimeElemnt.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }

  // london
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElemnt = londonElement.querySelector(".date");
    let londonTimeElemnt = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElemnt.innerHTML = moment().format("dddd MMM Do, YYYY");
    londonTimeElemnt.innerHTML = londonTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }

  // tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElemnt = tokyoElement.querySelector(".date");
    let tokyoTimeElemnt = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElemnt.innerHTML = moment().format("dddd MMM Do, YYYY");
    tokyoTimeElemnt.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  console.log(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  console.log(cityName);
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div id="cities">
      <div class="city">
        <div>
          <h2> ${cityName}</h2>
          <div class="date">${cityTime.format("dddd MMM Do, YYYY")}</div>
        </div>

        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
      </div>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#select-city");
citiesSelectElement.addEventListener("change", updateCity);
