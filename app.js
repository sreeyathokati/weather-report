const key = "9415678075f11ade9b4466d018c69fde"
const url ="https://api.openweathermap.org/data/2.5/weather?units=metric";

const search = document.querySelector(".search input");
const btn = document.querySelector(".search button") ;
const weatherIconElement = document.querySelector(".weather-icon");
const weather= document.querySelector(".weather");
const error = document.querySelector(".error");

async function checkweather(city){
  const response = await fetch(url+ `&q=${city}` +`&appid=${key}`);
  var info = await response.json();
  // console.log(info)
  
  if(response.status>=400){
    error.style.display="block";
    weather.style.display="none";
  }
  else{
    document.querySelector(".city").innerHTML = info.name;
  document.querySelector(".temp").innerHTML = Math.round(info.main.temp)+"°C";
  document.querySelector(".humidity").innerHTML = info.main.humidity+"%";
  document.querySelector(".windspeed").innerHTML = info.wind.speed+"km/h";

 
  weatherIconElement.src=`https://openweathermap.org/img/w/${info.weather[0].icon}.png`;

  weather.style.display = "block";
  error.style.display="none"
  }
}


btn.addEventListener("click", () => {
  checkweather(search.value);
});


