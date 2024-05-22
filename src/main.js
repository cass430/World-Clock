function updateTime() {
  // vancouver
  let vancouverElement = document.querySelector("#vancouver");
  let vancouverDateElemnt = vancouverElement.querySelector(".date");
  let vancouverTimeElemnt = vancouverElement.querySelector(".time");
  let vancouverTime = moment().tz("America/Los_Angeles");

  vancouverDateElemnt.innerHTML = moment().format("dddd MMM Do, YYYY");
  vancouverTimeElemnt.innerHTML = vancouverTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
  // new-york
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElemnt = newYorkElement.querySelector(".date");
  let newYorkTimeElemnt = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElemnt.innerHTML = moment().format("dddd MMM Do, YYYY");
  newYorkTimeElemnt.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  // london
  let londonElement = document.querySelector("#london");
  let londonDateElemnt = londonElement.querySelector(".date");
  let londonTimeElemnt = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElemnt.innerHTML = moment().format("dddd MMM Do, YYYY");
  londonTimeElemnt.innerHTML = londonTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  // tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElemnt = tokyoElement.querySelector(".date");
  let tokyoTimeElemnt = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElemnt.innerHTML = moment().format("dddd MMM Do, YYYY");
  tokyoTimeElemnt.innerHTML = tokyoTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
