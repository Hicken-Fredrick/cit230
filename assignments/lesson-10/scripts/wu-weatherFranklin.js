var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();

weatherConditions.open('GET', 'https://api.wunderground.com/api/cc7606ac5fc21a84/conditions/q/MN/Franklin.json', true);
weatherForecast.open('GET', 'https://api.wunderground.com/api/cc7606ac5fc21a84/forecast/q/MN/Franklin.json', true);

weatherConditions.send();
weatherForecast.send();

weatherConditions.onload = function() {
    var weatherFranklin = JSON.parse(weatherConditions.responseText);
    console.log(weatherFranklin);
    
    var forecastFranklin = JSON.parse(weatherForecast.responseText);
    console.log(forecastFranklin);
    
    document.getElementById('statusImg').src = "https://icons-ak.wxug.com/i/c/k/" + weatherFranklin.current_observation.icon + ".gif";
    document.getElementById('status').innerHTML = weatherFranklin.current_observation.weather;
    document.getElementById('temp').innerHTML = weatherFranklin.current_observation.temp_f + "°F";   
    document.getElementById('windSpeed').innerHTML = "Windspeed: " + weatherFranklin.current_observation.wind_mph + "mph";
    document.getElementById('txtWeather').innerHTML = forecastFranklin.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('windChill').innerHTML = "Windchill: " + weatherFranklin.current_observation.windchill_f + "°F";
    document.getElementById('txtWind').innerHTML = "Winds : " + weatherFranklin.current_observation.wind_string;
    
}