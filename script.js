$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let long = position.coords.longitude;
            let lat = position.coords.latitude;
            const api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+config.api;
            $.getJSON(api, function(data) {
                let kTemp;
                let tempSwap=true;
                let weatherType=data.weather[0].description
                kTemp=data.main.temp;
                let windSpeed=data.wind.speed;
                let city=data.name;
            console.log(city);
            $('#city').html(city);
            $('#weatherType').html(weatherType);
            $('#fTemp').html(fTemp(kTemp)+" &deg;F");
            $('#fTemp').click(function(){
                if(tempSwap===false){
                    $('#fTemp').html(cTemp(kTemp)+" &deg;C");
                    tempSwap=true;
                }
                else{
                $('#fTemp').html(fTemp(kTemp)+" &deg;F");
                tempSwap=false;
                }
            });
            $('#windSpeed').html(windSpeed+" m/s");
            });
        });
    }
});
const fTemp=(temp)=>{document.getElementById('fTemp').textContent=console.log((temp*(9/5)-459.67).toFixed(1))}
const cTemp=(temps)=>{document.getElementById('fTemp').textContent=console.log((temps-273).toFixed(1))}
