
const regForm = document.getElementById("register");
const loginForm = document.getElementById("login");
const usersDiv = document.getElementById("users-data");

const admin = {
    username: "Nika",
    email: "nikoloz0812@gmail.com",
    password: "12345",
    isAdmin: true
}

let users = JSON.parse(localStorage.getItem("users")) || [admin];
localStorage.setItem("users", JSON.stringify(users));

const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

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
    setLocalStorage("users", users);
    console.log(users);
    alert("Register successfully");
    regForm.reset();
}

const deleteUser = (isAdmin, delEmail) => {
    const newUsers = [];

    for(const user of users) {
        if(user.email !== delEmail) {
            newUsers.push(user);
        }
    }

    users = newUsers;
    setLocalStorage("users", users);
    if(isAdmin) {
        renderAllUsers(users[0]);
    } else {
        usersDiv.innerHTML = "";
    }
}

const renderAllUsers = (adminAcc) => {
    usersDiv.innerHTML = `
        <div>
            <h3>Username: ${adminAcc.username}</h3>
            <p>Email: ${adminAcc.email}</p>
            <p>Password: ${adminAcc.password}</p>
        </div>
    `
    
    for(const user of users.slice(1,)) {
        usersDiv.innerHTML += `
            <div>
                <h3>Username: ${user.username}</h3>
                <p>Email: ${user.email}</p>
                <p>Password: ${user.password}</p>
                <button onclick="deleteUser(${true}, '${user.email}')">Delete</button>
            </div>
        `
    }
}

const renderUser = (user) => {
    usersDiv.innerHTML = `
        <div>
            <h3>Username: ${user.username}</h3>
            <p>Email: ${user.email}</p>
            <p>Password: ${user.password}</p>
            <button onclick="deleteUser(${false}, '${user.email}')">Delete</button>
        </div>
    `
}

const handleLogIn = () => {
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    for(const user of users) {
        if(user.email === email && user.password === password) {
            usersDiv.innerHTML = "";
            if(user.isAdmin) {
                renderAllUsers(user);
            } else {
                renderUser(user);
            }
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