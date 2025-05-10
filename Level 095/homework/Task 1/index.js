
const { Addition, filter } = require("./calculator.js")

Addition(5,6);
Addition(3,62);
Addition(51,9);

filter([4,5,6], Addition);
filter([6,8,6], Addition);
filter([1,5,9], Addition);