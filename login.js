const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    greeting.innerText = `Hello, ${loginInput.value}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(loginForm.classList);
    console.log(greeting.classList);
}

loginForm.addEventListener("submit", onLoginSubmit);