
class Subscription {

    #userID;
    #plan;
    #paymentMethod;

    constructor(userID, plan, paymentMethod) {
        this.#userID = userID;
        this.#plan = plan;
        this.#paymentMethod = paymentMethod;
    }

    #validatePayment(paymentMethod) {
        const validMethods = ["credit card", "debit card", "paypal"];
        return validMethods.includes(paymentMethod.toLowerCase());
    }


    upgrdePlan(newPlan) {
        if (newPlan) {
            this.#plan = NewPlan;
            console.log(`Subscription upgraded to: ${newPlan}`);
        } else {
            console.log("Invalid plan selection.");
        }
    }
    updatePaymentMethod(newPaymentMethod) {
        if (this.#validatePayment(newPaymentMethod)) {
            this.#paymentMethod = newPaymentMethod;
            console.log(`Payment method updated to: ${newPaymentMethod}`);
        } else {
            console.log("Invalid payment method. Accepted methods: Credit Card, Debit Card, PayPal.");
        }
    }

    viewSubscription() {
        console.log(`User ID: ${this.#userID}, Plan: ${this.#plan}, Payment Method: ${this.#paymentMethod}`);
    }
}

const mySubscription = new Subscription("user123", "Basic", "Credit Card");
mySubscription.viewSubscription();
mySubscription.upgradePlan("Premium");
mySubscription.updatePaymentMethod("PayPal");