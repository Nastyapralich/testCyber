const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;

    if (localStorage.getItem("email") === email && localStorage.getItem("password") === password) {
        alert("Вход выполнен успешно!");
        if (remember) {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
        }
    } else {
        alert("Неверный email или пароль!");
    }

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("remember").checked = false;
});


const registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Регистрация выполнена успешно!");

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("remember").checked = false;
});