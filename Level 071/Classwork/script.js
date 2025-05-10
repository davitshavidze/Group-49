
// Task 1

let elements = document.getElementsByClassName("my-class");

// Task 2

let elementById = document.querySelector("#my-id");
console.log(elementById);


let elementByClass = document.querySelector(".my-class");
console.log(elementByClass);


// Task 3

let img = document.querySelector("img");
img.src = "new-image.jpg";
img.width = 300;

// Task 4

let paragraph = document.querySelector("p");
paragraph.style.color = "red"; 
paragraph.style.backgroundColor = "yellow"; 
paragraph.style.fontSize = "20px";


// Task 5

let newParagraph = document.createElement("p");
let textNode = document.createTextNode("NewText")
div.appendChild(newParagraph); 