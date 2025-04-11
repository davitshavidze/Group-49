
// Codewars 1

function findAverage(array) {
    let result = 0;
    
    for(const num of array) {
        result += num
    }
    
    if(array.length === 0) {
        return 0;
    }
    
    return result / array.length;
}

// Codewars 2

function countBy(x, n) {
    const result = [];
    
    for(let i = 1; i <= n; i++) {
      result.push(i * x);
    }
    
    return result;
}

// Codewars 3

const reverseSeq = n => {
    const result = [];
    
    for(let i = n; i > 0; i--) {
        result.push(i);
    }
    
    return result;
};

// Codewars 4

function findMissingLetter(array) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(let i = 0; i < array.length - 1; i++) {
    if(alphabet[alphabet.indexOf(array[i]) + 1] !== array[i + 1]) {
        return alphabet[alphabet.indexOf(array[i]) + 1];
        }
    }
    
}

