
document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    const user = {
        name,
        email,
        age,
    }

    localStorage.setItem(name, JSON.stringify(user));
})

