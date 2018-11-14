$(document).ready(function() {
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            let long = position.coords.longitude;
            let lat = position.coords.latitude;

            const api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=3cb8e36c4588b6e453e62866225dcb2b';

            $.getJSON(api, function(data) {
                let fTemp;
                let cTemp;
                let kTemp;
                let tempSwap=true;
            let weatherType=data.weather[0].description
            kTemp=data.main.temp;
            let windSpeed=data.wind.speed;
            let city=data.name;
            fTemp=(kTemp*(9/5)-459.67).toFixed(1);
            cTemp=(kTemp-273).toFixed(1);
                /*
            alert(data.coord.lon);*/
            console.log(city);
            $('#city').html(city);
            $('#weatherType').html(weatherType);
            $('#fTemp').html(fTemp+" &deg;F");
              $('#fTemp').click(function(){
                if(tempSwap===false){
                    $('#fTemp').html(cTemp+" &deg;C");
                     tempSwap=true;
                }
                else{
                  $('#fTemp').html(fTemp+" &deg;F");
                  tempSwap=false;
                }
              });
              
              
            $('#windSpeed').html(windSpeed+" m/s");

                
              
            });
        });
    }    
});