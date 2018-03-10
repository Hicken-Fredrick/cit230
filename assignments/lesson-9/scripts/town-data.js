var main = document.querySelector('.home-page')
var imgArray = ["images/main-page/franklin-main.jpg", "images/main-page/greenville-main.jpg", "images/main-page/placerton-main.jpg",
                "images/main-page/springfield-main.jpg"]

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() 
{
    var towns = request.response;
    listTowns(towns);
}

function listTowns(jsonObj) 
{
    var town = jsonObj['towns'];
    
    for (var i = 0; i < town.length; i++)
    {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var divWeather = document.createElement('div');
        var myList = document.createElement('ul');
        var myImage = document.createElement('img');
        
        myH2.textContent = town[i].name;
        myH3.textContent = town[i].motto;
        myPara1.textContent = "Year Founded: " + town[i].yearFounded;
        myPara2.textContent = "Current Population: " + town[i].currentPopulation;
        myPara3.textContent = "Average Rainfall: " + town[i].averageRainfall + "\"";
        
        var events = town[i].events;
        for (var j = 0; j< events.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = events[j];
            myList.appendChild(listItem);
        }
        
        myImage.setAttribute("src", imgArray[i]);
    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        
        divWeather.className = town[i].name.toLowerCase();
        myArticle.appendChild(divWeather);
        
        
        myArticle.appendChild(myList);
        myArticle.appendChild(myImage);
        
        if (i % 2 == 0)
        myArticle.className = "reverse";
        main.appendChild(myArticle);
    }
    
}