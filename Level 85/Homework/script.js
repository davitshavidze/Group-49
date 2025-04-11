
// 1) შექმენით 5 ელემენტიანი მასივი და მისი თითეული ელემენტი შეინახეთ ცვლადში, დესტრუქციის მეშვეობით

const arr = [1,2,3,4,5]

const [a,b,c,d,e] = arr

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

// 2) შექმენით ობიექტი მინიმუმ სამი კუთვნილებით და მისი თითეული კუთვნილება შეინახეთ ცვლადში, დესტრუქციის მეშვეობით

const obj1 = {
    name: "David",
    surname: "Shavidze",
    age: 15
}

const { name, surname, age, } = person;

console.log(person)

// 3) კომენტარებით ახსენით რა არის rest/spread ოპერატორები და რა განსხვავებაა მათ შორის.

// Rest და Spread ოპერატორები (...) არის JavaScript-ის ძლიერი ფუნქციები, რომლებიც იმავე სინტაქსს იყენებენ, მაგრამ თვალსაჩინო განსხვავებით: Rest ოპერატორი გამოიყენება ელემენტების/კუთვნილებების "დაგროვებისთვის", ხოლო Spread ოპერატორი გამოიყენება ელემენტების/კუთვნილებების "გაშლისთვის".


// 4) შექმენით ფუნქცია, რომელსაც გადაეცემა n რაოდენობის რიცხვი, ამ ფუნქციამ უნდა დააბრუნოს გადაცემული რიცხვების ჯამი. გამოიძახეთ ის რამოდენიმეჯერ და ყოველ ჯერზე არგუმენტად გადაეცით სხვადასხვა რაოდენობის რიცხვი.

function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumNumbers(10,20,30));          
console.log(sumNumbers(5,15,25,35,45));  
console.log(sumNumbers(1,2,3,4,5,6));   
console.log(sumNumbers(100,34,23,12));

// 5)  შექმენით 10 ელემენტიანი მასივი და დააკოპირეთ იგი spread ოპერატორის გამოყენებით.

const arr_num = [1,2,3,4,5,6,7,8,9,10]

const coppy_arr = [...arr_num]

console.log(coppy_arr)

// 6) შექმენით ობიექტი მინიმუმ ხუთი კუთვნილებით. თქვენი დავალებაა დესტურქციის გამოყენებით პირველი ორი კუთვნილება შეინახოთ ცვლადებში, ხოლო დანარჩენი კუთვნილებები ახალი ობიექტის სახით(დაგჭირდებათ spread ოპერატორი)

const person = {
    name2: "David",
    age2: 15,
    profession: "Frond-End Developer",
    city: "Tbilisi",
    hobby: "Reading"
};

const { name2, age2, ...rest } = person;

console.log(name2); 
console.log(age);   
console.log(rest);  