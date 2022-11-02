// var input = document.getElementById("input");

// // Execute a function when the user presses a key on the keyboard
// input.addEventListener("keypress", function(event) {
// // If the user presses the "Enter" key on the keyboard
// if (event.key === "Enter") {
//     alert("hello")
//     getLocation(peris)
//     function getLocation(peris) {
//         getPosition(showPosition(peris));

//         function showPosition(peris) {
//             let latitude = peris.coords.latitude;
//             let longitude = peris.coords.longitude; 
//             return peris;    
//         }

//         getPosition((success) => {
        
//         let {latitude, longitude } = success.coords;
//         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
    
//             console.log(data)
//             showWeatherData(data);
    
//         })
//         })
//     }
// }

// });

const wrapper = document.querySelector(".wrapper"),
inputPart = document.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input"),
locationBtn = inputPart.querySelector("button"),
weatherPart = wrapper.querySelector(".weather-part"),
wIcon = weatherPart.querySelector("img"),
arrowBack = wrapper.querySelector("header i");

const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';

inputField.addEventListener("keyup", e =>{
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
    }
});

function requestApi(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    fetchData();
}

function fetchData(){
    infoTxt.innerText = "Getting weather details...";
    infoTxt.classList.add("pending");
    fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{
        infoTxt.innerText = "Something went wrong";
        infoTxt.classList.replace("pending", "error");
    });
}
function weatherDetails(info){
    if(info.cod == "404"){
        infoTxt.classList.replace("pending", "error");
        infoTxt.innerText = `${inputField.value} isn't a valid city name`;
    }else{
        // const city = info.name;
        // const country = info.sys.country;
        // const {description, id} = info.weather[0];
        // const {temp, feels_like, humidity} = info.main;
        // if(id == 800){
        //     wIcon.src = "icons/clear.svg";
        // }else if(id >= 200 && id <= 232){
        //     wIcon.src = "icons/storm.svg";  
        // }else if(id >= 600 && id <= 622){
        //     wIcon.src = "icons/snow.svg";
        // }else if(id >= 701 && id <= 781){
        //     wIcon.src = "icons/haze.svg";
        // }else if(id >= 801 && id <= 804){
        //     wIcon.src = "icons/cloud.svg";
        // }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
        //     wIcon.src = "icons/rain.svg";
        // }
        
        // weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
        // weatherPart.querySelector(".weather").innerText = description;
        // weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
        // weatherPart.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
        // weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
        // infoTxt.classList.remove("pending", "error");
        // infoTxt.innerText = "";
        // inputField.value = "";
        // wrapper.classList.add("active");
        showWeatherData(info);
    }
}