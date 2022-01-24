const searchBar = document.getElementById("searchBar").addEventListener("input", function(e) {
  let search = e.target.value
  
 

var baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var keyCode = "&units=imperial&appid=947b7e1e972d91d49f8eb5b9e62a4a65";
let url = baseURL + search + keyCode;
let container = document.getElementsByClassName("container");

  fetch(url)
   .then(response => {
     return response.json();
   })

  .then(data => {
    console.log(data);
    displayResults(data);
   
   
   // populating data
    function displayResults(data) {
      let locationStart = document.querySelector('#location-start')
      locationStart.innerText = `${data.name}, ${data.sys.country}`;

      let tempNum = document.querySelector('#temp-num')
      tempNum.innerText = `${Math.round(data.main.temp)} °F`;

      let descTop = document.querySelector('#desc-top')
      descTop.innerText = `${data.weather[0].description}`

      let location = document.querySelector('#location')
      location.innerText = `${data.name}, ${data.sys.country}`;

      let temp = document.querySelector('#temp')
      temp.innerText = `- Temperature: ${Math.round(data.main.temp)} °F`;

      let feels = document.querySelector('#feels')
      feels.innerText = `- Feels like: ${Math.round(data.main.feels_like)} °F`;

      let min = document.querySelector('#min')
      min.innerText = `- Min ${Math.round(data.main.temp_min)} °F`;

      let max = document.querySelector('#max')
      max.innerText = `- Max ${Math.round(data.main.temp_max)} °F`;

      let wind = document.querySelector('#wind')
      wind.innerText = `- ${Math.round(data.wind.speed)} Mph Winds`;

      let desc = document.querySelector('#desc')
      desc.innerText = `- ${data.weather[0].description}`

      // background image parameters

      if(data.weather[0].description.includes("snow") == true){
        document.getElementById("main-container").style.background = "url(weather-icon/snowy.jpg)";
      }
      
      if(data.weather[0].description.includes("clouds") == true){
        document.getElementById("main-container").style.background = "url(weather-icon/overcast2.jpg)";
      }
      if(data.weather[0].description.includes("few clouds") == true){
        document.getElementById("main-container").style.background = "url(weather-icon/clear-day.jpg)";
      }
      if(data.weather[0].description.includes("clear") == true){
        document.getElementById("main-container").style.background = "url(weather-icon/clear-day.jpg)";
      }
      if(data.weather[0].description.includes("rain") == true){
        document.getElementById("main-container").style.background = "url(weather-icon/rain-img.jpg)";
      }

    }
  })
})


// Image Credit Popup
function popUp(){
  document.getElementById("credit-popup").style.visibility = "visible";
  document.getElementById("top-data").style.visibility = "hidden";
}

function closePop(){
  document.getElementById("credit-popup").style.visibility = "hidden";
  document.getElementById("top-data").style.visibility = "visible";
}
