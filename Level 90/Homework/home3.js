
class SecureNote {

    #content;
    #pin;

    constructor(content, pin) {
        this.#content = content;
        this.#pin = pin;
    }

    #validatePin(pin) {
        return this.#pin === pin;
    }

    updateContent(newContent, pin) {
        if (this.#validatePin(pin)) {
            this.#content = newContent;
            console.log("Note updated successfully.");
        } else {
            console.log("Incorrect PIN. Access denied.");
        }
    }

    getContent(pin) {
        if (this.#validatePin(pin)) {
            console.log(`Note Content: ${this.#content}`);
        } else {
            console.log("Incorrect PIN. Access denied.");
        }
    }
}

const myNote = new SecureNote("This is a private note.", "1234");
myNote.getContent("1234");
myNote.updateContent("Updated secret message.", "1234");
myNote.getContent("4321");