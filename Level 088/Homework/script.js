
// 1) Create a Class with Public Properties Define a Car class with public properties make and model. Create an instance and access these properties.

class Car {
    constructor(make, model) {
        this.make = make;   
        this.model = model; 
    }
}

const myCar = new Car("Toyota", "Corolla");

console.log(`Make: ${myCar.make}`);  
console.log(`Model: ${myCar.model}`); 


// 2) Use Private Properties Define a BankAccount class where balance is a private property. Implement a public method to deposit and withdraw money from the account.

class BankAccount {

    #balance 

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Deposited ${amount}. New balance: ${this.#balance}`;
        }
        return "Deposit amount must be positive.";
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return `Withdrew ${amount}. Remaining balance: ${this.#balance}`;
        }
        return "Invalid withdrawal amount.";
    }

    getBalance() {
        return `Current balance: ${this.#balance}`;
    }
}


const account = new BankAccount(1000);

console.log(account.deposit(500));
console.log(account.withdraw(200)); 
console.log(account.getBalance()); 


// 3) Static Methods and Properties Create a MathOperations class with a static method add() that adds two numbers. Also, define a static property PI representing the value of Pi

class MathOperations {
    static PI = 3.14159;

    static add(a, b) {
        return a + b;
    }
}

console.log(`Value of PI: ${MathOperations.PI}`);       
console.log(`Sum: ${MathOperations.add(5, 10)}`);       
console.log(`Sum with Pi: ${MathOperations.add(7, MathOperations.PI)}`); 


// 4) Use Getters and Setters Define a Rectangle class with properties width and height. Use a getter to calculate and return the area of the rectangle. Also, include a setter that ensures width and height are always positive numbers.

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get area() {
        return this._width * this._height;
    }
    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.error("Width must be a positive number.");
        }
    }
    set height(value) {
        if (value > 0) {
            this._height = value;
        } else {
            console.error("Height must be a positive number.");
        }
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
}

const rectangle = new Rectangle(5, 10);

console.log(`Area: ${rectangle.area}`); 

rectangle.width = 8;
rectangle.height = 12;

console.log(`Updated Area: ${rectangle.area}`);


// 5) Private Methods Create a User class where a private method validatePassword() checks the strength of the password. The method should only be used internally when setting a password.

class User {
    #password;

    constructor(username) {
        this.username = username;
    }


    #validatePassword(password) {
        const minLength = 8;
        const hasNumber = /\d/;
        const hasSpecialChar = /[!@#$%^&*]/;

        if (
            password.length >= minLength &&
            hasNumber.test(password) &&
            hasSpecialChar.test(password)
        ) {
            return true;
        }
        return false;
    }

    setPassword(password) {
        if (this.#validatePassword(password)) {
            this.#password = password;
            console.log("Password set successfully!");
        } else {
            console.error("Password is too weak. It must be at least 8 characters long, contain a number and a special character.");
        }
    }
}

// 6) Static Method for Comparison Define a Student class with a static method compareGrades(student1, student2) that compares the grades of two student instances.


class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    static compareGrades(student1, student2) {
        if (student1.grade > student2.grade) {
            return `${student1.name} has a higher grade (${student1.grade}) than ${student2.name} (${student2.grade}).`;
        } else if (student1.grade < student2.grade) {
            return `${student2.name} has a higher grade (${student2.grade}) than ${student1.name} (${student1.grade}).`;
        } else {
            return `${student1.name} and ${student2.name} have the same grade (${student1.grade}).`;
        }
    }
}
