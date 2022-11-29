function displayTemperature(response) {
  console.log(response.data);
}
let apiKey = "140b3eb45f31cd8abo75dta8374d8f50";
let query = "New York";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
