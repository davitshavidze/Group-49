
class UserProfile {
    #username;
    #email;
    #password;

    constructor(username, email, password) {
        this.#username = username;
        this.#email = email;
        this.#password = password;
    }

    #validatePassword(password) {
        return this.#password === password;
    }

    updateEmail(newEmail) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(newEmail)) {
            this.#email = newEmail;
            console.log("Email updated successfully.");
        } else {
            console.log("Invalid email format.");
        }
    }

    updatePassword(oldPassword, newPassword) {
        if (this.#validatePassword(oldPassword)) {
            if (newPassword.length >= 6) {
                this.#password = newPassword; 
                console.log("Password updated successfully.");
            } else {
                console.log("New password must be at least 6 characters long.");
            }
        } else {
            console.log("Incorrect current password.");
        }
    }

    getUsername() {
        return this.#username;
    }
}

const user = new UserProfile("David", "david@gmail.com", "121212");
console.log(user.getUsername());
user.updateEmail("new.email@example.com");
user.updatePassword("121212", "blabla");