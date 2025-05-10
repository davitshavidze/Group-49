
class InventoryItem {
    #name;
    #quantity;
    #cost;

    constructor(name, quantity, cost) {
        this.#name = name;
        this.#quantity = quantity;
        this.#cost = cost;
    }

    #validateQuantityChange(amount) {
        return this.#quantity - amount >= 0;
    }

    restock(amount) {
        if (amount > 0) {
            this.#quantity += amount;
            console.log(`${amount} items added. New quantity: ${this.#quantity}`);
        } else {
            console.log("Restock amount must be positive.");
        }
    }

    sell(amount) {
        if (amount > 0 && this.#validateQuantityChange(amount)) {
            this.#quantity -= amount;
            console.log(`${amount} items sold. Remaining quantity: ${this.#quantity}`);
        } else {
            console.log("Insufficient stock or invalid amount.");
        }
    }
    getInfo() {
        console.log(`Item: ${this.#name}, Quantity: ${this.#quantity}, Cost: $${this.#cost}`);
    }
}

const item = new InventoryItem("Laptop", 10, 800);
item.restock(5)
item.sell(3)