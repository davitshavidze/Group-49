
// Codewars 1

function solution(str){
    return str.split('').reverse().join('');  
}

// Codewars 2

function points(results) {
    let totalPoints = 0;

    results.forEach(result => {
        const [x, y] = result.split(':').map(Number);
        if (x > y) {
            totalPoints += 3; 
        } else if (x === y) {
            totalPoints += 1; 
        }
    });

    return totalPoints;
}


// Codewars 3

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
};


// Codewars 4

function factorial(n){
    if (n === 0 || n === 1) {
          return 1; 
      }
      return n * factorial(n - 1); 
  
}

// Codewars 5

function kebabize(str) {
    str = str.replace(/[^a-zA-Z]/g, '');

    str = str.replace(/([A-Z])/g, '-$1').toLowerCase();

    return str.startsWith('-') ? str.slice(1) : str;

}