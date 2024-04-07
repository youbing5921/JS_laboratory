const API_KEY = "324a3b3df9a342b16a31ad159f91ef92";

function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도
	const lon = position.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
		.then((response) => response.json())
		.then((data) => {
            const weather = document.querySelector("#weather h3");
			weather.innerText = `${data.name}, 🌡${parseInt(data.main.temp)}'C / ${data.weather[0].main}`;
		});
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);