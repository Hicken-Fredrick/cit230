//http://api.wunderground.com/api/cc7606ac5fc21a84/conditions/q/MN/Franklin.json

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();

weatherConditions.open('GET', 'http://api.wunderground.com/api/cc7606ac5fc21a84/conditions/q/MN/Franklin.json', true);
weatherForecast.open('GET', 'http://api.wunderground.com/api/cc7606ac5fc21a84/forecast/q/MN/Franklin.json', true);

weatherConditions.send();
weatherForecast.send();

weatherConditions.onload = function() {
    var weatherFranklin = JSON.parse(weatherConditions.responseText);
    console.log(weatherFranklin);
    
    var forecastFranklin = JSON.parse(weatherForecast.responseText);
    console.log(forecastFranklin);
    
    var weather = document.querySelector('.franklin')
    
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myIcon = document.createElement('img');
    var myPara4 = document.createElement('p');
    
    myIcon.setAttribute("src", weatherFranklin.current_observation.icon_url);
    myPara1.textContent = "Current Condition are: " + weatherFranklin.current_observation.weather;
    myPara2.textContent = "Current Temperature is: " + weatherFranklin.current_observation.temp_f + "°F";
    myPara3.textContent = "Windspeed is currently: " + weatherFranklin.current_observation.wind_mph + "mph";
    myPara4.textContent = "Upcoming Forecast shows: " + forecastFranklin.forecast.txt_forecast.forecastday["0"].fcttext;
    
    weather.appendChild(myIcon);
    weather.appendChild(myPara1);
    weather.appendChild(myPara2);
    weather.appendChild(myPara3);
    weather.appendChild(myPara4);
    
}