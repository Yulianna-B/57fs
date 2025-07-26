const translations = {
    en: {
      today: "Today",
      forecast: "7-day forecast",
      temperature: "Temperature",
      wind: "Wind speed",
      time: "Time",
      city: "City",
      max: "Max",
      min: "Min",
      loading: "Loading current weather..."
    },
    ua: {
      today: "Сьогодні",
      forecast: "Прогноз на 7 днів",
      temperature: "Температура",
      wind: "Швидкість вітру",
      time: "Час",
      city: "Місто",
      max: "Макс",
      min: "Мін",
      loading: "Завантаження поточної погоди..."
    }
  };
  
  let currentLang = "en";
  
  function setLanguage(lang) {
    currentLang = lang;
    updateTextContent();
    loadWeather();
  }
  
  function updateTextContent() {
    document.getElementById("app-title").textContent = translations[currentLang].today;
    document.getElementById("forecast-title").textContent = translations[currentLang].forecast;
  }
  
  async function loadWeather() {
    const loadingBlock = document.getElementById("current-weather");
    loadingBlock.innerHTML = `<p>${translations[currentLang].loading}</p>`;
  
    try {
      const location = await getUserLocation();
      const weatherData = await getWeather(location.latitude, location.longitude);
  
      showCurrentWeather(weatherData, location.city);
      showWeeklyForecast(weatherData);
    } catch (error) {
      console.error("Ошибка загрузки погоды:", error);
      loadingBlock.innerHTML = `<p>❌ Не удалось загрузить погоду</p>`;
    }
  }
  
  async function getUserLocation() {
    const res = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client");
    const data = await res.json();
    return {
      city: data.city,
      latitude: data.latitude,
      longitude: data.longitude,
    };
  }
  
  async function getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=7`;
    const res = await fetch(url);
    return await res.json();
  }
  
  function showCurrentWeather(data, city) {
    const block = document.getElementById("current-weather");
    const weather = data.current_weather;
  
    block.innerHTML = `
      <h3>${translations[currentLang].city}: ${city}</h3>
      <p>🌡️ ${translations[currentLang].temperature}: ${weather.temperature}°C</p>
      <p>💨 ${translations[currentLang].wind}: ${weather.windspeed} km/h</p>
      <p>🕒 ${translations[currentLang].time}: ${formatTime(weather.time)}</p>
    `;
  }
  
  function formatDate(dateStr, lang) {
    const date = new Date(dateStr);
    const options = { day: "numeric", month: "long" };
    const locale = lang === "ua" ? "uk-UA" : "en-US";
    return date.toLocaleDateString(locale, options);
  }
  
  function formatTime(dateStr) {
    const date = new Date(dateStr);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  
  function showWeeklyForecast(data) {
    const container = document.getElementById("forecast-list");
    container.innerHTML = "";
  
    const days = data.daily;
    for (let i = 0; i < days.time.length; i++) {
      const day = document.createElement("div");
      day.className = "forecast-card";
      day.innerHTML = `
        <p>📅 ${formatDate(days.time[i], currentLang)}</p>
        <p>🌞 ${translations[currentLang].max}: ${days.temperature_2m_max[i]}°C</p>
        <p>❄ ${translations[currentLang].min}: ${days.temperature_2m_min[i]}°C</p>
      `;
      container.appendChild(day);
    }
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    setLanguage("en"); 
  });
  