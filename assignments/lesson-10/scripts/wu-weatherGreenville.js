var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();

weatherConditions.open('GET', 'https://api.wunderground.com/api/cc7606ac5fc21a84/conditions/q/TX/Greenville.json', true);
weatherForecast.open('GET', 'https://api.wunderground.com/api/cc7606ac5fc21a84/forecast/q/TX/Greenville.json', true);

weatherConditions.send();
weatherForecast.send();

weatherConditions.onload = function() {
    var weatherGreenville = JSON.parse(weatherConditions.responseText);
    console.log(weatherGreenville);
    
    var forecastGreenville = JSON.parse(weatherForecast.responseText);
    console.log(forecastGreenville);
    
    document.getElementById('statusImg').src = "https://icons-ak.wxug.com/i/c/k/" + weatherGreenville.current_observation.icon + ".gif";
    document.getElementById('status').innerHTML = weatherGreenville.current_observation.weather;
    document.getElementById('temp').innerHTML = weatherGreenville.current_observation.temp_f + "°F";   
    document.getElementById('windSpeed').innerHTML = "Windspeed: " + weatherGreenville.current_observation.wind_mph + "mph";
    document.getElementById('txtWeather').innerHTML = forecastGreenville.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('windChill').innerHTML = "Windchill: " + weatherGreenville.current_observation.windchill_f + "°F";
    document.getElementById('txtWind').innerHTML = "Winds : " + weatherGreenville.current_observation.wind_string;
    
}