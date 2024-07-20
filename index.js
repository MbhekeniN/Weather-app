function cityTemperature (response) {
  let temperatureElement = document.querySelector("#Number");
  let Temperature = Math.round(response.data.temperature.current)
  temperatureElement.innerHTML = Temperature;
  let h1 = document.querySelector("#city-name");
  h1.innerHTML = response.data.city;
  
}

function search(event) {
  event.preventDefault();
  let input = document.querySelector("#search-Bar");
  let city = input.value;


let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=2fo4a0349e06dtd35a3306b4b26aea49`;

axios.get(apiUrl).then(cityTemperature)
}

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let Day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes().toString().padStart(2, "0");

let date = document.getElementById("Details");
date.innerHTML = `${Day} ${hour}:${minutes},`;

let form = document.querySelector("form");
form.addEventListener("submit", search);





