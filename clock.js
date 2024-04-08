const clock = document.querySelector("#clock h3");
function getClock() {
    const date = new Date();
    const day = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const dayOfTheWeek = day[date.getDay()];
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}(${dayOfTheWeek}) ${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);