let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let message = document.getElementById("message");
const loginBtn = document.getElementById("loginBtn");

const correctUsername = "admin";
const correctPassword = "admin123";

loginBtn.addEventListener("click", function () {
    let isValid = false;

    for (let i = 0; i < 1; i++) {
        if (
            usernameInput.value.toUpperCase() === correctUsername.toUpperCase() &&
            passwordInput.value === correctPassword
        ) {
            isValid = true;
        }
    }
    if (isValid) {
        message.textContent = "Welcome "+ usernameInput.value.toUpperCase() +" Login successful! Redirecting...";
        message.style.color = "green";
        message.style.fontStyle = "italic";
    } else {
        message.textContent = "Invalid credentials, please retry";
        message.style.color = "red";

        usernameInput.value = "";
        usernameInput.focus();
        passwordInput.value = "";
        // message.textContent = "";
    }
});