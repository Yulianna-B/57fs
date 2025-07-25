const city = document.getElementById('city')
const temperature = document.getElementById("temperature");
const gusts = document.getElementById("gusts");
const wind = document.getElementById("wind");

async function fetchWeather() {
    const {data} = await axios.get(
        "https://api.bigdatacloud.net/data/reverse-geocode-client"
);
// console.log(data);
const {city, latitude, longitude} = data;
console.log(city, latitude, longitude);

}

//сделайте запрос 
/*https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m,weather_code

// замените координаты на ваши и выведите в консоль пролученную информацию 
*/
 
const {data: weatherInfo} = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m,weather_code`
);
 console.log(weatherInfo);

 const {temperature_2m, wind_gusts_10m, wind_speed_10m } = weatherInfo
fetchWeather();

