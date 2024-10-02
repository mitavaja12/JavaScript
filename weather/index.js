const createWeatherCard = (data) => {
    const weatherDescription = data.weather[0].main;
    const weatherColors = {
        Clear: "#f7d26d",
        Clouds: "#b0bec5",
        Rain: "#5d737e",
        Snow: "#e0f7fa",
        Thunderstorm: "#3b4d61",
        Drizzle: "#a3b7d0",
        Haze: "#d3cbb8",
        Others: "#d6d6d6"
    };
    document.body.style.backgroundColor = weatherColors[weatherDescription] || weatherColors.Others;

    const weatherEmojis = {
        Clear: "☀️",
        Clouds: "☁️",
        Rain: "🌧️",
        Snow: "❄️",
        Thunderstorm: "⛈️",
        Drizzle: "🌦️",
        Haze: "🌫️",
        Others: "🌍"
    };

    document.getElementById("data").innerHTML = `
        <div class="weather-card">
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>${new Date().toLocaleString()}</p>
            <p id="type">${weatherDescription}</p>
            <p class="weather-emoji">${weatherEmojis[weatherDescription] || weatherEmojis.Others}</p>
            <p class="temperature">${Math.round(data.main.temp)}°</p>
            <p>Min: ${Math.round(data.main.temp_min)}° Max: ${Math.round(data.main.temp_max)}°</p>
            <div class="weather-info">
                <div class="weather-box">
                    <p>Real Feel</p>
                    <p>${Math.round(data.main.feels_like)}°</p>
                </div>
                <div class="weather-box">
                    <p>Humidity</p>
                    <p>${data.main.humidity}%</p>
                </div>
                <div class="weather-box">
                    <p>Wind</p>
                    <p>${data.wind.speed} m/s</p>
                </div>
                <div class="weather-box">
                    <p>Pressure</p>
                    <p>${data.main.pressure} hPa</p>
                </div>
            </div>
        </div>`;
}

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    createWeatherCard(data);
}

const handleSearch = (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value;
    fetchData(`https://api.openweathermap.org/data/2.5/weather?appid=0fdc88f1a67d09059c9e313b7d58d6bc&q=${city}&units=metric`);
}

const fetchWeatherByLocation = (lat, lon) => {
    fetchData(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0fdc88f1a67d09059c9e313b7d58d6bc&units=metric`);
}

const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => fetchWeatherByLocation(latitude, longitude),
        () => alert("Unable to retrieve your location. Please enter the city name manually.")
    );
}

document.getElementById("form").addEventListener("submit", handleSearch);
getLocation();