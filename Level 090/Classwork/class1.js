
class BankAccount {
    
    #accountNumber;
    #balance;
    #pin;

    constructor(accountNumber, initialBalance, pin) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
        this.#pin = pin;
    }

    #validatePin(pin) {
        return this.#pin === pin;
    }

    #setBalance(amount) {
        this.#balance = amount;
    }

    get accountNumber() {
        return this.#accountNumber;
    }

    set pin(newPin) {
        if (newPin.length === 4 && !isNaN(newPin)) {
            this.#pin = newPin;
        } else {
            console.log("Invalid PIN. Must be a 4-digit number.");
        }
    }

    deposit(amount) {
        if (amount > 0) {
            this.#setBalance(this.#balance + amount);
            console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount, pin) {
        if (!this.#validatePin(pin)) {
            console.log("Incorrect PIN.");
            return;
        }

        if (amount > 0 && amount <= this.#balance) {
            this.#setBalance(this.#balance - amount);
            console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Insufficient balance or invalid amount.");
        }
    }

    checkBalance(pin) {
        if (this.#validatePin(pin)) {
            console.log(`Your balance is $${this.#balance}`);
        } else {
            console.log("Incorrect PIN.");
        }
    }
}

const myAccount = new BankAccount("123456789", 1000, "1234");
myAccount.deposit(500);
myAccount.withdraw(200, "1234");
myAccount.checkBalance("1234");
myAccount.pin = "4321";