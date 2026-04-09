const apiKey = '';

async function apiCall(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

(function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', getLocList);
})();

async function getLocList(e) {
  e.preventDefault();
  const location = e.target[0].value;
  const geocoding = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`;
  const locs = await apiCall(geocoding);
  displayResults(locs);
}

function displayResults(locationList) {
  const container = document.getElementById('container');
  locationList.forEach((location) => {
    let city = document.createElement('h3');
    let cityName = `${location.name}, ${location?.state || ''}, ${location?.country || ''}`;
    city.innerText = cityName;
    city.id = 'city';
    city.addEventListener('click', () => {
      // clear the container
      container.innerHTML = '';
      weatherCreator(location);
    });
    container.appendChild(city);
  });
}

async function weatherCreator(location) {
  // get lat and lon
  const lat = location.lat;
  const lon = location.lon;
  // pass to the API fetch function
  const currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  const weather = await apiCall(currentWeather);
  // pass to weather function
  displayWeather(weather);
}

function displayWeather(place) {
  const container = document.getElementById('container');
  const temp = place.main.temp;
  const description = place.weather[0].description;
  const wind = place.wind.speed;

  const tempH3 = document.createElement('h3');
  const descriptionH3 = document.createElement('h3');
  const windH3 = document.createElement('h3');

  tempH3.innerText = `${temp}° C`;
  descriptionH3.innerText = description;
  windH3.innerText = `${wind} kph`;

  container.appendChild(descriptionH3);
  container.appendChild(tempH3);
  container.appendChild(windH3);
}
