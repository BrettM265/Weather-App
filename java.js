const searchBar = document.getElementById("searchBar").addEventListener("input", function(e) {
  let search = e.target.value
  
 

var baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var keyCode = "&units=imperial&appid=947b7e1e972d91d49f8eb5b9e62a4a65";
let url = baseURL + search + keyCode;


   fetch(url)
   .then(response => {
     return response.json();
   })

   .then(data => {
     console.log(data);
   displayResults(data)
   
   
   
   function displayResults(data) {
   let location = document.querySelector('#location')
   location.innerText = `${data.name}, ${data.sys.country}`;

   let temp = document.querySelector('#temp')
   temp.innerText = `Temperature: ${Math.round(data.main.temp)} °F`;

   let feels = document.querySelector('#feels')
   feels.innerText = `Feels like: ${Math.round(data.main.feels_like)} °F`;

   let wind = document.querySelector('#wind')
   wind.innerText = `Wind: ${Math.round(data.wind.speed)} Mph Winds`;

   let desc = document.querySelector('#desc')
   desc.innerText = `Description: ${data.weather[0].description}`
   }
  })
})


