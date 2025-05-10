

// 1) პრივატული ველი – ბანკის ანგარიში
// შექმენი კლასი `BankAccount` პრივატული ველით `balance`. დაამატე მეთოდები `deposit`, `withdraw` და `getBalance`, რომლებიც უზრუნველყოფენ ბალანსზე წვდომასა და განახლებას.


class BankAccount {
    #balance
    
    constructor(initialBalance = 0) {
        this.#balance = initialBalance; 
    }

    deposit(amount) {
        if (amount > 0) {
          this.#balance += amount;
          console.log(`${amount} Deposited to your bank account`);
        } else {
          console.log("Enter Positive Amount");
        }
    }
    
     withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
          this.#balance -= amount;
          console.log(`${amount} is withdrawed succesfully`);
        } else {
          console.log("Valid balance");
        }
    }
    
    getBalance() {
        return this.#balance;
    }
}

// 2) კლასის კომპოზიცია – ავტორი და წიგნი
// შექმენი ორი კლასი: `Author` და `Book`. `Book` კლასში გამოიყენე `Author` როგორც ველი და დაამატე მეთოდი, რომელიც დაბეჭდავს წიგნის სათაურს და ავტორის სახელს.


class Author {
    constructor(name) {
      this.name = name;
    }
  }
  
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
  
    printInfo() {
      console.log(`წიგნის სათაური: ${this.title}, ავტორი: ${this.author.name}`);
    }
}
  
const author1 = new Author("1000 words");
const book1 = new Book("wiliam Shakespiare", author1);
  
book1.printInfo();

// 3) მემკვიდრეობა + პრივატული ველი – თანამშრომელი და მენეჯერი**
// შექმენი კლასი `Employee` პრივატული ხელფასის ველით. მემკვიდრეობით შექმენი `Manager`, რომელსაც დაემატება ახალი ველი – `department`. დაამატე მეთოდი, რომელიც დაბეჭდავს სახელის, განყოფილების და ხელფასის ინფორმაციას.

class Employee {
  #salary;

  constructor(name, salary){
    this.name = name;
    this.#salary = salary;
  }

  getSalary(){
    console.log(`Your sallary is ${this.#salary}`)
  }
}

class Manager extends Employee {
  constructor(name, salary, departament){
    super(name, salary);
    this.departament = departament;
  }

  getInfo(){
    console.log(`Name: ${this.name}`)
    console.log(`Salary: ${this.salary}`)
    console.log(`Departament: ${this.departament}`)
  }
}

const employee1 = new Manager("David", "$750", "IT-Technology")