let weather = {
    apikey: "feed6933e0faf540a7e5853155dcdcd7",
    fetchweather : function(city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + city +
        "&units=metric&lang=en&appid=" + this.apikey
        )
        .then((Response) => Response.json())
        .then((data) => this.dataweather(data));
    },

    dataweather: function(data){
        var {name} = data;
        var {description} = data.weather[0];
        var {temp,humidity} = data.main;
        var {speed} = data.wind;


        document.querySelector(".city").innerText = "For " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed : " + speed + "km/h";
    },

    search: function(){
        this.fetchweather(document.querySelector(".search-eng").value);
    },
}


document.querySelector(".search-eng").addEventListener("click", function(){
    weather.search()
})

document.querySelector(".search-eng").addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        weather.search()
    }
})

weather.fetchweather("Istanbul");