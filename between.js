let country1 = document.querySelector("#country1");
let city1 = document.querySelector("#city1");
let country2 = document.querySelector("#country2");
let city2 = document.querySelector("#city2");
let country3 = document.querySelector("#country3");
let city3 = document.querySelector("#city3");
let check = document.querySelector("#check1");
let check2 = document.querySelector("#check2");
let check3 = document.querySelector("#check3");
let tempIcon = document.querySelector("#tempIcon");
let tempIcon1 = document.querySelector("#tempIcon1");
let tempIcon2 = document.querySelector("#tempIcon2");
let weatherCountry = document.querySelector("#weatherCountry");
let weatherCountry1 = document.querySelector("#weatherCountry1");
let weatherCountry2 = document.querySelector("#weatherCountry2");
let temperature = document.querySelector("#temperature");
let temperature1 = document.querySelector("#temperature1");
let temperature2 = document.querySelector("#temperature2");
let weatherDescription = document.querySelector("#weatherDescription");
let weatherDescription1 = document.querySelector("#weatherDescription1");
let weatherDescription2 = document.querySelector("#weatherDescription2");
let feelsLike = document.querySelector("#feelsLike");   
let feelsLike1 = document.querySelector("#feelsLike1");
let feelsLike2 = document.querySelector("#feelsLike2");
let humidity = document.querySelector("#humidity");
let humidity1 = document.querySelector("#humidity1");
let humidity2 = document.querySelector("#humidity2");
let longitude = document.querySelector("#longitude");
let longitude1 = document.querySelector("#longitude1");
let longitude2 = document.querySelector("#longitude2");
let latitude = document.querySelector("#latitude");
let latitude1 = document.querySelector("#latitude1");
let latitude2 = document.querySelector("#latitude2");

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const temp = document.getElementById('temp');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');
const elem = document.getElementById("input");

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];



setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);




check.addEventListener("click", () => {
    let key = `bd4ea33ecf905116d12af172e008dbae`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city1.value},${country1.value}&lang=en&units=metric&appid=${key}`;
    let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city2.value},${country2.value}&lang=en&units=metric&appid=${key}`;
    let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${city3.value},${country3.value}&lang=en&units=metric&appid=${key}`;
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + "')";
        

        data.weather.forEach(items => {
            weatherDescription.innerText = items.description;
            if (items.id < 250) {
                tempIcon.src = `tempicons/storm.svg`;
            } else if (items.id < 350) {
                tempIcon.src = `tempicons/drizzle.svg`;
            } else if (items.id < 550) {
                tempIcon.src = `tempicons/snow.svg`;
            } else if (items.id < 650) {
                tempIcon.src = `tempicons/rain.svg`;
            } else if (items.id < 800) {
                tempIcon.src = `tempicons/atmosphere.svg`;
            } else if (items.id === 800) {
                tempIcon.src = `tempicons/sun.svg`;
            } else if (items.id > 800) {
                tempIcon.src = `tempicons/clouds.svg`;
            }
        })

        feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`;
        
        humidity.innerText = `Humidity ${data.main.humidity}`;
        latitude.innerText = `Latitude ${data.coord.lat}`;
        longitude.innerText = `Longitude ${data.coord.lon}`;
        
    })
    country1.value = "";
    city1.value = "";


    fetch(url1).then(response => {
        return response.json();
    }).then(data1 => {
        console.log(data1);
        weatherCountry1.innerText = `${data1.name} / ${data1.sys.country}`;
        temperature1.innerHTML = `${data1.main.temp}°<b>C</b>`;        

        data1.weather.forEach(items => {
            weatherDescription1.innerText = items.description;
            if (items.id < 250) {
                tempIcon2.src = `tempicons/storm.svg`;
            } else if (items.id < 350) {
                tempIcon2.src = `tempicons/drizzle.svg`;
            } else if (items.id < 550) {
                tempIcon2.src = `tempicons/snow.svg`;
            } else if (items.id < 650) {
                tempIcon2.src = `tempicons/rain.svg`;
            } else if (items.id < 800) {
                tempIcon2.src = `tempicons/atmosphere.svg`;
            } else if (items.id === 800) {
                tempIcon2.src = `tempicons/sun.svg`;
            } else if (items.id > 800) {
                tempIcon2.src = `tempicons/clouds.svg`;
            }
        })

        feelsLike1.innerText = `Feels Like ${data1.main.feels_like}°C`;
        
        humidity1.innerText = `Humidity ${data1.main.humidity}`;
        latitude1.innerText = `Latitude ${data1.coord.lat}`;
        longitude1.innerText = `Longitude ${data1.coord.lon}`;
        
    })
    country1.value = "";
    city1.value = "";

    fetch(url2).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weatherCountry2.innerText = `${data.name} / ${data.sys.country}`;
        temperature2.innerHTML = `${data.main.temp}°<b>C</b>`;
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + "')";
        

        data.weather.forEach(items => {
            weatherDescription2.innerText = items.description;
            if (items.id < 250) {
                tempIcon3.src = `tempicons/storm.svg`;
            } else if (items.id < 350) {
                tempIcon3.src = `tempicons/drizzle.svg`;
            } else if (items.id < 550) {
                tempIcon3.src = `tempicons/snow.svg`;
            } else if (items.id < 650) {
                tempIcon3.src = `tempicons/rain.svg`;
            } else if (items.id < 800) {
                tempIcon3.src = `tempicons/atmosphere.svg`;
            } else if (items.id === 800) {
                tempIcon3.src = `tempicons/sun.svg`;
            } else if (items.id > 800) {
                tempIcon3.src = `tempicons/clouds.svg`;
            }
        })

        feelsLike2.innerText = `Feels Like ${data.main.feels_like}°C`;
        
        humidity2.innerText = `Humidity ${data.main.humidity}`;
        latitude2.innerText = `Latitude ${data.coord.lat}`;
        longitude2.innerText = `Longitude ${data.coord.lon}`;
        
    })
    country3.value = "";
    city3.value = "";
})
