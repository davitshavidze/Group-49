
// Create a basic Promise that resolves immediately
// Task: Use the Promise constructor to create a promise that resolves with the message "Hello, Promise!".

const Salary = {
    low: 1000,
    medium: 1500,
    high: 3000
}

function Executor(resolve, reject){
    if(Salary.low > 800){
        resolve("Hello, Promise!")
    } else {
        reject("Low Sallary")
    }
}

const salary = new Promise(Executor)
console.log(salary)

// Create a Promise that rejects with an error
// Task: Write a promise that rejects with the message "Something went wrong!" and handle the rejection with .catch().

function Executor2(resolve, reject){
    if(salary.medium > 1600){
        resolve("Normal medium Salary")
    } else {
        reject("Too low for medium salary")
    }
}

const medium = new Promise(Executor2)
console.log(medium)

// Use setTimeout to resolve a Promise after 2 seconds
// Task: Create a promise that waits for 2 seconds using setTimeout and then resolves with "2 seconds have passed".

function waitTwoSeconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("2 seconds have passed");
    }, 2000);
  });
}


waitTwoSeconds().then(message => console.log(message));

// Handle both resolve and reject outcomes
// Task: Write a promise that randomly either resolves with "Success!" or rejects with "Failed!" using Math.random(). Handle both outcomes with .then() and .catch().

function randomOutcome() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Success!");
      } else {
        reject("Failed!");
      }
    }, 2000);
  });
}

randomOutcome()
  .then(message => console.log("Resolved:", message))
  .catch(error => console.log("Rejected:", error));


// Create a chain of promises using .then(),
// Task: Create a promise that resolves with the number 5. Chain multiple .then() calls to multiply the number by 2 in each step.

let x = 5

function Executor3(resolve, reject){
    if (x === 5){
        resolve(x)
    } else {
        reject("Num isn't 5")
    }
}

Executor3
   .then(x * 2)
   .then(x * 2)
   .then(x * 2)


