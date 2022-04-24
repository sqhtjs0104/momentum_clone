API_KEY = "4774724ff1b8c46103dc36e9844bb19a";
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const name = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp;

        document.querySelector("#weather span:first-child").innerText = name;
        document.querySelector("#weather span:nth-child(2)").innerText = weather;
        document.querySelector("#weather span:last-child").innerText = String(temp);
    });
}
function onGeoError() {
    alert("Can't find your location. Weather info couldn't provided. :(")
}

const option = {
    enableHighAccuracy: false,
    timeout: 10000,
    maximumAge: Infinity
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError, option);
console.log(navigator.geolocation);