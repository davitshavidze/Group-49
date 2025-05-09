
// Classwork No.1

const nums = [1,2,3,4,5]

const numsReduce = nums.reduce((sum, cur) => {
    return sum + cur
}, 0)

console.log(nums);
console.log(numsReduce);

// Classwork No.2

const numList = [6,7,8,9,10]

const numsReduceFunc = numList.reduce((sum, cur) => {
    return sum * cur
}, 1)

console.log(numList);
console.log(numsReduce);