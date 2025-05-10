

// 1) შექმენით ფუნქცია, რომელსაც გადაეცემა n რაოდენობის რიცხვი, ამ ფუნქციამ უნდა დააბრუნოს გადაცემული რიცხვების ჯამი. გამოიძახეთ ის რამოდენიმეჯერ და ყოველ ჯერზე არგუმენტად გადაეცით სხვადასხვა რაოდენობის რიცხვი.


function sumOfNums( ...nums ){
    return nums.reduce((total, num) => total + num, 0)
}

sumOfNums(20,30,42)
sumOfNums(42,98,74)
sumOfNums(12,76,34)
sumOfNums(38,9,23)

// შექმენით 2 ობიექტი, მინიმუმ 2 კუთვნილებით. შემდეგ კი შექმენით ახალი ობიექტი, სადაც spread ოპერატორის გამოყენებით ჩააკოპირებთ ორივე ობიექტის კუთვნილებებს

const obj1 = {
    name: "David",
    age: 15
}

const obj2 = {
    name: "Nika",
    age: 17
}

const sumOfObj = {
    ...obj1,
    ...obj2
}

console.log(sumOfObj)

// 3) მსგავსი დავალება გაიმეორეთ სიებზეც

const list1 = [1,2,3]

const list2 = [4,5,6]

const lists = [...list1, ...list2]

console.log(lists)