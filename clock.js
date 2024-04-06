const clock = document.querySelector("h3#clock");
function getClock() {
    const date = new Date();
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfTheWeek = day[date.getDate()];
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `현재 시각 : ${date.getFullYear()}.${date.getMonth()}.${date.getDay()}(${dayOfTheWeek}) ${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);