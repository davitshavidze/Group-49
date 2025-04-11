
// 1) გააკეთეთ rest operator'ის 3 მაგალითი

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); 


const user = { name: "David", age: 25, country: "Georgia" };
const { name, ...rest } = user;

console.log(name);
console.log(rest); 


const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest2] = numbers;

console.log(first, second); 
console.log(rest); 


// 2) გააკეთეთ spread operator'ის 3 მაგალითი

const numbers2 = [1, 2, 3];
const newNumbers = [...numbers2, 4, 5, 6];

console.log(newNumbers); 


const user2 = { name: "David", age: 25 };
const updatedUser = { ...user, country: "Georgia" };

console.log(updatedUser);



function sum(a, b, c) {
    return a + b + c;
}

const numbers3 = [2, 4, 6];
console.log(sum(...numbers3));


// 3) გააკეთეთ rest და spread ოპერატორების ერთად გამოყენების 1 მაგალითი

function processNumbers(first, second, ...rest) {
    console.log(`პირველი ორი რიცხვი: ${first}, ${second}`);
    console.log(`დანარჩენი რიცხვები:`, rest);
}

const numbers5 = [1, 2, 3];
const numbers6 = [4, 5, 6];

const allNumbers = [...numbers, ...numbers2];

processNumbers(...allNumbers); 


// 4) ახსენით რა არის localstorage და რაში და როგორ ვიყენებთ

// LocalStorage არის ვებ-ბრაუზერის მიერ შემოთავაზებული მექანიზმი, რომელიც საშუალებას გაძლევთ შეინახოთ მონაცემები ლოკალურად (მომხმარებლის მოწყობილობაზე) გრძელვადიანად, ანუ მონაცემები რჩება, სანამ მომხმარებელი არ წაშლის მათ ხელით ან ბრაუზერის cache-ს. ეს იყენებს key-value სტრუქტურას, სადაც key არის მნიშვნელობის სახელი და value არის მონაცემი.

