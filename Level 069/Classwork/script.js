
// 1 შექმენით ცვლადი სადაც შეინახავთ ახლანდელ Date'ს

const currentDate = new Date();
console.log(currentDate)


// 2 ჯერ გამოიტანეთ ეს ცვლადი, შემდეგ კი გამოიყენეთ და გამოიტანეთ ყველა მეთოდი რომელიც რესურსებშია ჩაგდებული

console.log(currentDate.getFullYear());
console.log(currentDate.getMonth() + 1); 
console.log(currentDate.getDate());
console.log(currentDate.getHours());

