// 1)

function isPrime(num) {
    if (num < 2) {
        return false
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if (num % 2 === 0) return false
    }
}

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

let primes = []

nums.forEach(num => {
    if (isPrime(num)) primes.push(num)
})

console.log(primes)

// 2)

const users = [
    {id: 1, name: "David"},
    {id: 2, name: "Nika"},
    {id: 3, name: "Giga"}
]

const names = users.map(user => user.name)

console.log(names)

// 3)

const prods = [
    {name: "Laptop", price: 1000},
    {name: "PC", price: 1700},
    {name: "Monitor", price: 600},
    {name: "Microfone", price: 200}
]

let maxPrice = 500

const filtered = prods.filter(product => product.price < maxPrice)

console.lof(filtered)

// 4)

const books = [
    {title: "Man in cold", author: "Decaprio"},
    {title: "White park", author: "Shakespear"},
    {title: "English Grammar", author: "Linda Lee"}
]

const phrase = authors.map(authors => `Title is ${books.title}, Author is ${books.author}`)

console.log(phrase)

// 5)

const numbers = [5,28,19,23,11,30,29,60,98]

const divicible = numbers.filter(num => num > 10 && num / 3 === 0);

console.log(divicible)

// 6)

const user = [
    {name: "David", age: 15},
    {name: "Nika", age: 17},
    {name: "Cotne", age: 14},
    {name: "Luka", age: 15}
]

const updatedUsers = user.map(user => ({
    ...user,
    isAdult: user.age >= 18
}));

console.log(updatedUsers)

// 7)

const arr = [56,34,63,87,95,45,90,78,101,12,34]

const grater = arr.filter(num => num > 50)

const mapNums = arr.map(num => num / 2)

console.log(mapNums)

// 8)

const wordArr = ["Hello", "World", "Nika", "Dato", "Datvi", "Vashli"];

const count = {}

const mehthod = wordArr.forEach(word => {
    count[word] = (count[word] || 0) + 1
})

console.log(count);

// 9)

const cars = [
    { brand: { name: "Toyota" }, model: "Corolla", year: 2020 },
    { brand: { name: "Honda" }, model: "Civic", year: 2019 },
    { brand: { name: "Toyota" }, model: "Camry", year: 2021 },
    { brand: { name: "Ford" }, model: "Mustang", year: 2022 }
];

const filteredCars = (carArray, brandName) => {
    return carArray.filter(car => car.name.brand === brandName)
}

const toyotaCars = filterByBrand(cars, "Toyota");

console.log(toyotaCars);
