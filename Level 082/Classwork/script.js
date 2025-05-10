

let personalData = {
    name: "David",
    surname: "Shavidze",
    age: 30
};


localStorage.setItem("personalData", JSON.stringify(personalData));

let storedData = JSON.parse(localStorage.getItem("personalData"));

document.getElementById("output").innerText = `Surname: ${storedData.surname}`;


storedData.name = "Giorgi";


localStorage.setItem("personalData", JSON.stringify(storedData));


console.log("Updated Object:", JSON.parse(localStorage.getItem("personalData")));