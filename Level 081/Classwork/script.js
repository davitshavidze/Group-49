
const regForm = document.getElementById("register");
const loginForm = document.getElementById("login");

const users = [];

function Account(username, email, password) {
    return { username, email, password };
}

const handleRegister = () => {
    for(const user of users) {
        if(user.email === regForm.email.value) {
            alert("Email is already registerd");
            return;
        }
    }

    const username = regForm.username.value;
    const email = regForm.email.value;
    const password = regForm.password.value;

    users.push(new Account(username, email, password));

    console.log(users);
    alert("Register successfully");
    regForm.reset();
}

const handleLogIn = () => {
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    for(const user of users) {
        if(user.email === email && user.password === password) {
            alert("Log in successfully");
            alert(`Username: ${user.username}\nEmail: ${user.email}\nPassword: ${user.password}\n`);
            loginForm.reset();
            return;
        }
    }

    alert("User not found");
}


regForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleRegister();
})

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleLogIn();
})