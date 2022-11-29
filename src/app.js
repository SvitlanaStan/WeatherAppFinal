function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
}

// let apiKey = "140b3eb45f31cd8abo75dta8374d8f50";
// let query = "Lisbon";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=140b3eb45f31cd8abo75dta8374d8f50&units=metric`;

axios.get(apiUrl).then(displayTemperature);
