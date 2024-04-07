const loginForm = document.querySelector("#login form");
const loginInput = document.querySelector("#login input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
    paintGreeting(savedUsername);
} else {
    loginForm.addEventListener("submit", onLoginSubmit);
}