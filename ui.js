class UI {
  constructor() {
this.dataMold = document.querySelector("weather-function")
this.city
  };

fillUI(data) {

  this.dataMold.innerHTML = `

  <div class ="info-body">
  <h4>${data.name}</h4>
  <h7>${data.main.temp}</h7>
  <p>${data.weather[0].description}</p>
  <p>${data.wind} MPH</p>
  </div>

`;
}

}
