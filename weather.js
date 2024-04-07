const API_KEY = "324a3b3df9a342b16a31ad159f91ef92";

function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도
	const lon = position.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
		.then((response) => response.json())
		.then((data) => {
            const city = document.querySelector("#weather h3:first-child");
			const weather = document.querySelector("#weather h3:last-child");
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${parseInt(data.main.temp)}'C`;
		});
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);