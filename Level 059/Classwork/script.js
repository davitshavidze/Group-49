
// prompt'ის მეშვეობით შექმენით ორი ცვლადი სადაც მომხმარებელს შემოატანინებთ თითო-თითო რიცხვს და შემდეგ გამოიტანეთ მათი ჯამი

let num1 = Number(prompt("First number:"));
let num2 = Number(prompt("Second number:"));

let sum = num1 + num2;

console.log(sum);

// prompt'ის მეშვეობით შექმენით 1 ცვლადი სადაც მომხმარებელი შემოიტანს სახელს და შემდეგ მიესალმეთ

let name = prompt("Your name:");
console.log("Hello, " + name + "!");

// შექმენით რაიმე ფორმა, სადაც იქნება name input და submit ღილაკი (არ დაგავიწდეთ რომ name input'ს მისცეთ name attribute), 
// გამოიყენეთ addEventListener იმისთვის რომ submit ღილაკზე დაჭერისას console'ში გამოიტანოს მომხმარებლის შემოტანილი სახელი

submit.addEventListener("click",function(event) {
    event.preventDefault()
    let input = document.getElementsByName("name").value
    console.log("User name:", input)
})

