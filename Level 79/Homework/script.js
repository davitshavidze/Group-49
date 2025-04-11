

function displayData() {
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    document.getElementById("output").innerHTML = `
        <h1>User Data</h1>
        <p>Fullname: ${fullname}</p>
        <p>Email: ${email}</p>
        <p>Password: ${age}</p>
    `;
}
