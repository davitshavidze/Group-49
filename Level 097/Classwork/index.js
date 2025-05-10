
const names = ["Liam", "Emma", "Noah", "Olivia", "Ava", "William", "Sophia", "James", "Isabella", "Benjamin"];

// ForEach Method -->

names.forEach((curValue, index) => {
    if(index % 2 === 0) {
        console.log(`${curValue} is on even index`);
    } else {
        console.log(`${curValue} is on odd index`);
    }
})

// ForEach Method Clone V 1.0 -->

for(let i = 0; i < names.length; i++){
    const curValue = names[i]
    if(i % 2 === 0) {
        console.log(`${curValue} is on Even index`)
    } else {
        console.log(`${curValue} is on Odd index`)
    }
}

// ForEach Method Clone V 2.0 -->

const func = (curValue, index, curArray) => {
    console.log(`Name ${curValue} is on ${index} index`);
}

const forEach = (array, func) => {
    for(let i = 0; i < array.length; i++) {
        func(array[i], i, array);
    }
}

forEach(names, func);


// Map Mehtod Clone V 1.0 --> 

const numbers = [57, 23, 89, 11, 78, 36, 64, 5, 92, 44];

function clone(arr, func) {

    const result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i, arr))
    }

    return result
}


const newNumbers = mapClone(numbers, (curValue, index) => {

    if (index % 2 === 0) {
        return Math.floor(curValue / 2);
    } else {
        return curValue * 2;
    }

});

console.log(newNumbers);


// Map Method Clone V 2.0 --> 

const func2 = (curValue, index, curArray) => {
    if(index % 2 === 0) {
        return Math.floor(curValue / 2);
    }
    
    return curValue * 2;
}

const map = (array, func) => {
    const result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(func(array[i], i));
    }
    
    return result;
}

const newNumbers2 = map(numbers, func2);

console.log(newNumbers);
