
class EmailClient {
    #email;
    #password;
    #inbox = [];

    constructor(email, password) {
        this.#email = email;
        this.#password = password; 
    }

    #validatePassword(password) {
        return this.#password === password;
    }

    #receiveEmail(email) {
        this.#inbox.push(email);
    }

    login(password) {
        if (this.#validatePassword(password)) {
            console.log("Login successful.");
        } else {
            console.log("Incorrect password.");
        }
    }

    sendEmail(to, message) {
        if (to && message) {
            console.log(`Email sent to ${to}: "${message}"`);
            this.#receiveEmail({ from: this.#email, message });
        } else {
            console.log("Invalid recipient or empty message.");
        }
    }

    readInbox() {
        if (this.#inbox.length > 0) {
            console.log("Inbox messages:", this.#inbox);
        } else {
            console.log("Inbox is empty.");
        }
    }
}

const myEmail = new EmailClient("david#gmail.com", "blabla12");
myEmail.login("dd::dd");
myEmail.sendEmail("friend@gmail.com", "Hello, how are you?");
myEmail.readInbox();