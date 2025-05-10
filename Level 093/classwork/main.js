
// 1. მემკვიდრეობა – ცხოველის კლასი
// შექმენი კლასი `Animal`, რომელსაც ექნება მეთოდი `speak`. ამის შემდეგ შექმენი შვილი კლასი `Dog`, რომელიც გადაფარავს `speak` მეთოდს და დაბეჭდავს ძაღლის-specific ტექსტს.

class Animal {
    speak () {
        console.log("Animal makes loud sound")
    }
}

class Dog extends Animal {
    speak () {
        console.log("Woof! Dog barks")
    }
}

const animal = new Animal();
animal.speak()

const dog = new Dog()
animal.speak()


// 2. 2. სტატიკური მეთოდი – მომხმარებლის რაოდენობა
// შექმენი კლასი `User`, რომელიც ინახავს ყველა შექმნილი მომხმარებლის რაოდენობას. დაამატე სტატიკური მეთოდი, რომელიც აბრუნებს ამ რაოდენობას.

class User {
    static count = 0

    constructor(name) {
        this.name = name;
        User.count++
    }

    static getUserCount(){
        return User.count
    }
}


const user1 = new User("David") // count = 1
const user2 = new User("Nika") // count = 2
const user3 = new User("Giorgi") // count = 3