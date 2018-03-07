window.onload = function windChill() {
    
    var f = 35.74 + (0.6215 * 78) - (35.75 * Math.pow(5 , .16)) + (0.4275 * 78 * Math.pow(5 , .16));
    
    f = f.toFixed(2);
    
    var windyChilly = "Wind Chill " + f;
    
    window.document.getElementById('windChill').innerHTML = windyChilly;
}