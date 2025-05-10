
// 1) გაიხსენეთ როდის გამოვიდა ES6 და მოიყვანეთ მაგალითები თუ რა updateბი შემოიტანა, ასევე ახსენეთ რაში გამოგვადგა ეს updateები
// ES6 გამოვიდა 2015 წელს და მან შემოიტანა update-ები:const & let keyword, arrow functions, for of/in loop და სხვა მრავალი feature. ისინი გვეხმარება რომ უფრო მარტივად და ეფექტურად გამოვიყენოთ JS.

// 2) ახსენით რატომ ჯობია let და const, var Keyword'ს
// let/const keyword-ები არის განახლებული და არის დაfixული ცუდი თვისებები რაც ჰქონდა var-ს. var-ს აქვს global scope რამაც შეიძლება გამოიწვიოს არეულობა კოდში.

// 3) გამოიყენეთ for...of loop

const numbers = [10, 20, 30, 40];

for (const num of numbers) {
console.log(num);
};

// 4) გამოიყენეთ for...in loop

const user = {
    name: "Erekle",
    age: 14,
    city: "Tbilisi"
};

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
};

// 5) გამოიყენეთ Object.assign() მეთოდი და ახსენით როგორ მუშაობს

const test1 = { a: 1, b: 2 };
const test2 = { b: 4, c: 5 };

const result = Object.assign(test1, test2);

console.log(test1);

// აქ გადადის test2-ის თვისებები test1-ში და ანახლებს უკვე მყოფ თვისებებს, ხოლო ახალი ემატება.


// 6) შექმენით ფუნქცია arrow function'ის გამოყენებით.

const add = (a, b) => a + b;

console.log(add(3, 5));