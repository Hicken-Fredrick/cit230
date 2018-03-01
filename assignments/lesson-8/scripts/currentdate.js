window.onload = function getdate() {
    var full = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    var month = ["January", "Febuary", "March", "April", "May", "June",
                 "July", "August", "September", "October", "November",
                 "December"]

    var d = weekday[full.getDay()];
    var m = month[full.getMonth()];
    var numd = full.getDate();
    var y = full.getFullYear();
    
    var n = d + ", " + numd +" " + m + " " + y;
    window.document.getElementById('currentdate').innerHTML = n;
}