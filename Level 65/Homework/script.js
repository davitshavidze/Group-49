// 4) შექმენით Object Constructor ნებისმიერ რამეზე რომელსაც ექნება 5 property 
function Book(title, author, pages, genre, publishedYear) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.publishedYear = publishedYear;
}

const Book1 = new Book("White nights", "Fyodor Dostoyevsky", 52, "Novel", 1918);
console.log(Book1);

// 5) შექმენით Object Constructor მოტოებზე, უნდა ჰქონდეს 4 property და ერთ-ერთი უნდა იყოს მეთოდი

function Motorcycle(brand, model, engineCapacity, maxSpeed) {
    this.brand = brand;
    this.model = model;
    this.engineCapacity = engineCapacity;
    this.maxSpeed = maxSpeed
    this.getDetails = function () {
        return `${this.brand} ${this.model} - ${this.engineCapacity}cc, მაქსიმალური სიჩქარე: ${this.maxSpeed}km/h`;
    };
}

// ობიექტის შექმნა

const Motorcycle1 = new Motorcycle("Yamaha", "R1", 1000, 299);
console.log(Motorcycle1.getDetails());