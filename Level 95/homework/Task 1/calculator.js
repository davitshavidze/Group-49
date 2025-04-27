
function Addition(a,b) {
    console.log(a + b)
}

function filter(array, func) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

module.exports = { Addition, filter};